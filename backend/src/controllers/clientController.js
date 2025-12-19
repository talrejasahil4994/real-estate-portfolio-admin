const Client = require('../models/Client');
const { cropImage } = require('../utils/imageCropper');

const getClients = async (req, res, next) => {
  try {
    const clients = await Client.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: clients });
  } catch (error) {
    next(error);
  }
};

const createClient = async (req, res, next) => {
  try {
    const { name, description, designation } = req.body;
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image is required' });
    }

    const croppedFileName = await cropImage(req.file.buffer, req.file.originalname);
    const imageUrl = `/uploads/${croppedFileName}`;

    const client = await Client.create({ name, description, designation, imageUrl });
    res.status(201).json({ success: true, data: client });
  } catch (error) {
    next(error);
  }
};

const updateClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, designation } = req.body;
    const client = await Client.findByPk(id);

    if (!client) {
      return res.status(404).json({ success: false, message: 'Client not found' });
    }

    let imageUrl = client.imageUrl;
    if (req.file) {
      const croppedFileName = await cropImage(req.file.buffer, req.file.originalname);
      imageUrl = `/uploads/${croppedFileName}`;
    }

    await client.update({ name, description, designation, imageUrl });
    res.json({ success: true, data: client });
  } catch (error) {
    next(error);
  }
};

const deleteClient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const client = await Client.findByPk(id);

    if (!client) {
      return res.status(404).json({ success: false, message: 'Client not found' });
    }

    await client.destroy();
    res.json({ success: true, message: 'Client deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getClients, createClient, updateClient, deleteClient };
