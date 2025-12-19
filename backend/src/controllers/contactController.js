const Contact = require('../models/Contact');

const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: contacts });
  } catch (error) {
    next(error);
  }
};

const createContact = async (req, res, next) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const contact = await Contact.create({ fullName, email, mobile, city });
    res.status(201).json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
};

module.exports = { getContacts, createContact };
