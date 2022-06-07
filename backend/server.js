require('dotenv').config();
require("./database/mongOption.js").init(); // Connect the app to the database
const express = require('express'),
    cors = require('cors')


/*
    Create an express app
*/

const app = express(),
    port = process.env.PORT || 5000;

// Setting up the app
app.use(cors({
    origin: [
        `http://localhost:${port}`
    ],
    credentials: true
}));

app.use(express.json());


app.use("/api/auth", require("./routes/auth.js"));



// Start the server
app.listen(port, () => {
    console.log(`Backend server running on port: ${port}`);
});