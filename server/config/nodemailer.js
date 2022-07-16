// Packages
const nodemailer = require('nodemailer');

// Importing env file
require('dotenv').config({ path: '../env/secrets.env' });

// Environment Variables
const { AUTH_EMAIL, AUTH_PASS } = process.env;

// Making transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: `${AUTH_EMAIL}`,
    pass: `${AUTH_PASS}`,
  },
});

// Exporting the transporter
module.exports = { transporter };