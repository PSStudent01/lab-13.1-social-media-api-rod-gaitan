require('dotenv').config();  // 1) Require dotenv
const express = require('express'); // 2) Require express
const { MongoClient } = require('mongodb'); // 3) Require mongodb


const uri = process.env.MONGO_URI; // 4) Load environment variables from the .env file
const app = express(); // 5) Create an Express app instance
const port = 3001; // 6) Define a port (e.g., 3001)

app.get('/', async (req, res) => { // 8) Create a single GET route at '/'
     const client = new MongoClient(uri); // 7) Use the MongoClient to connect to the database using the URI from your environment variables
    try {  //  attempt to connect to the database!
         await client.connect(); // waits while attempting to connect
         res.status(200).json({ message: "Successfully connected to the database!" }); // 9) that, upon a successful database connection, sends back a JSON response: { message: "Successfully connected to the database!" }

    } catch (err) { //if something goes wrong, handle the error!
         console.error(err); // grabs the 500 code
         res.status(500).json({ message: "Failed to connect to the database." }); // 10) If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.

    } finally {  // regradless of what happens above..
        await client.close(); //  always close the connection when done!
    }
})

// Creating/starting server:
app.listen(port, () => {  //starts the server on port 3001
  console.log(`Server running on http://localhost:${port}`); //and logs a message so you know it's running
})



/*
Note:
- teh 'finally' block is quite important because leaving database connections open that ar enot needed leads to wasted resources and can cause performance issues over time.
*/