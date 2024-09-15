const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');
const Form = require("./schema");

dotenv.config();
const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL || 'https://questionnaire-frontend.vercel.app',
  'http://localhost:5173'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const URL = process.env.URL;

mongoose.connect(URL)
  .then(() => {
    console.log(`Successfully connected to ATLAS`);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



  app.post('/api/submit-form', async (req, res) => {
    try {
      const formData = new Form(req.body);
      console.log(req.body);
      await formData.save();
      res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Error submitting form' });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server Connected and listening to port ${PORT}`);
  });