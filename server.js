require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.listen(5000, () => {
    console.log("Backend server running at port 5000...");
});

// Database connection
mongoose.connect("mongodb://localhost:27017/MinimalChat")
.then(() => console.log("Connected to the database successfully!"))
.catch((error) => console.log("The following error occurred: ", error));

// User schema
const userSchema = new mongoose.Schema({
    Username: { type: String, required: true, unique: true },
    Password: { type: String, required: true }
});

const messageSchema = new mongoose.Schema({
    Username: {type: String, required: true},
    Content: {type: String, required: true},
    Timestamp: { type: Date, default: Date.now } 
})

const User = mongoose.model("user", userSchema);
const Message = mongoose.model("message", messageSchema);

// Export the User and UserAccounts model to be used in other API files
module.exports = { User , Message };

// Import APIs
const userLogin = require('./APIs/userLogin');
const userRegister = require('./APIs/userRegistration');
const handleMessages = require('./APIs/handleMessages')

// Use APIs
app.use('/login', userLogin);
app.use('/register', userRegister);
app.use('/messages', handleMessages);