const {
  DeleteMessageByID,
  GetAllMessages,
  PostMessage,
} = require("../middleware/DBMiddleware/DBMiddleware");
const express = require("express");
const VerifyToken = require("../middleware/AuthMiddleware/VerifyToken");
const router = express.Router();

router.get("/:username", [VerifyToken, GetAllMessages], (req, res) => {
  if (res.err) {
    return res.status(500).send("There was a problem finding the messages.");
  } else {
    res.json({
      Messages: [...res.Messages]
    });
  }
});

router.post("/", [VerifyToken, PostMessage], (req, res) => {
  if (res.err) {
    res
      .status(res.err.Code)
      .send(res.err.Message);
  } else {
    res.json({
      Message: res.newMessage
    });
  }
});

router.delete("/:id", [VerifyToken, DeleteMessageByID], (req, res) => {
  if (res.err) {
    res.status(500).send("There was a problem deleting the message.");
  } else {
    res.send("Success");
  }
});

module.exports = router;