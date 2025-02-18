const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Initialize environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize the app
const app = express();
app.use(express.json());

// Placeholder route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
