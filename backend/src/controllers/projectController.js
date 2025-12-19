const Project = require('../models/Project');
const { cropImage } = require('../utils/imageCropper');

const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image is required' });
    }

    const croppedFileName = await cropImage(req.file.buffer, req.file.originalname);
    const imageUrl = `/uploads/${croppedFileName}`;

    const project = await Project.create({ name, description, imageUrl });
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    let imageUrl = project.imageUrl;
    if (req.file) {
      const croppedFileName = await cropImage(req.file.buffer, req.file.originalname);
      imageUrl = `/uploads/${croppedFileName}`;
    }

    await project.update({ name, description, imageUrl });
    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    await project.destroy();
    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
