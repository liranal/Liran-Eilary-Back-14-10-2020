const MessageSchema = require("../../../models/MessageSchema");
module.exports = (req, res, next) => {
  console.log(req.params.id);
  MessageSchema.find(
    { $or: [{ Sender: req.params.id }, { Receiver: req.params.id }] },
    {},
    (err, msgs) => {
      if (err) {
        console.log(err);
        res.err = err;
      } else {
        res.Messages = msgs;
      }
      next();
    }
  );
};
