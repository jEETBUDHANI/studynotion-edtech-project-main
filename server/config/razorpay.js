require('dotenv').config();

const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Fetching Key ID from .env
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Fetching Key Secret from .env
});

module.exports = instance;
