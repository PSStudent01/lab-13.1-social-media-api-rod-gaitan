require('dotenv').config();  // Require dotenv
const express = require('express'); // Require express
const { MongoClient } = require('mongodb'); // Require mongodb


const uri = process.env.MONGO_URI; // Load environment variables from the .env file
const app = express(); // Create an Express app instance
const port = 3001; // Define a port (e.g., 3001)

app.get('/', async (req, res) => {

    try {


    } catch (err) {


    } finally {


    }




})