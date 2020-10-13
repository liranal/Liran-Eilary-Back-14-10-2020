const MessageSchema = require("../../../models/MessageSchema");
module.exports = (req, res, next) => {
  MessageSchema.findById(req.params.id, (err, msg) => {
    if (err) {
      res.err = err;
    } else if (msg) {
      MessageSchema.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
          res.err = err;
        }
      });
    } else {
      res.err = "Message Not Found";
    }
    next();
  });
};
