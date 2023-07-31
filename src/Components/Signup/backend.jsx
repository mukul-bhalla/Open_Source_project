// Backend server (app.js or server.js)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a MongoDB schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Create a Mongoose model based on the schema
const Form = mongoose.model('Form', formSchema);

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// API endpoint to handle form submissions
app.post('/api/submit-form', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a new document using the Mongoose model
    const newForm = new Form({
      name,
      email,
      message,
    });

    // Save the document to the database
    await newForm.save();

    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving form data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend API
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data); // Response from the backend (e.g., { message: 'Form data saved successfully' })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
