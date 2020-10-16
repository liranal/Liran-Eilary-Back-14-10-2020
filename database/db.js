const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
//Set up default mongoose connection
//const mongoDB = "mongodb://localhost:27017/UsersDB";
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });
//Get the default connection
const db = mongoose.connection;
db.once("open", () => console.log("Database opened..."));
db.on("error", () => console.log("Error occured.."));
