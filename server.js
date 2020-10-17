require("./database/db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8321;
var cors = require("cors");

// Global Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

// Routes
app.use("/api/auth", require("./routes/auth/authRouter"));
app.use("/api/users", require("./routes/UsersRouter"));
app.use("/api/message", require("./routes/MessageRouter"));
//Default Route
app.use("/", (req, res) => {
  res.json({ Message: "Default Route", Data: req.body });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
