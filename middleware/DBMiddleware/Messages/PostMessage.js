const MessageSchema = require("../../../models/MessageSchema");

module.exports = (req, res, next) => {
  let newMessage = new MessageSchema({
    Sender: req.body.sender,
    Receiver: req.body.receiver,
    Message: req.body.message,
    Subject: req.body.subject,
    Date: req.body.date,
  });
  newMessage.save((err) => {
    if (err) {
      console.log(err);
      res.err = err;
    } else {
      console.log("Saved: " + newMessage);
      res.newMessage = newMessage;
    }
    next();
  });
};
