const Subscriber = require('../models/Subscriber');

const getSubscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.findAll({ order: [['createdAt', 'DESC']] });
    res.json({ success: true, data: subscribers });
  } catch (error) {
    next(error);
  }
};

const createSubscriber = async (req, res, next) => {
  try {
    const { email } = req.body;
    const subscriber = await Subscriber.create({ email });
    res.status(201).json({ success: true, data: subscriber });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
       return res.status(400).json({ success: false, message: 'Email already subscribed' });
    }
    next(error);
  }
};

module.exports = { getSubscribers, createSubscriber };
