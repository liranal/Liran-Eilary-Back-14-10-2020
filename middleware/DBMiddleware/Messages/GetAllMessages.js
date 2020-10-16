const MessageSchema = require("../../../models/MessageSchema");
module.exports = (req, res, next) => {
  MessageSchema.find(
    { $or: [{ Copy: req.params.username }] },
    {Copy: 0},
    (err, msgs) => {
      if (err) {
        res.err = err;
      } else {
        res.Messages = msgs;
      }
      next();
    }
  );
};
