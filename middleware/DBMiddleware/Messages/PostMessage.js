const MessageSchema = require("../../../models/MessageSchema");
const UserSchema = require("../../../models/UserSchema");
const {
  UserNotFound
} = require("../../../Responses");
module.exports = async (req, res, next) => {
  let newMessageCopy1 = new MessageSchema({
    Copy: req.body.sender,
    Sender: req.body.sender=== req.body.sender ? "Me" : req.body.Sender ,
    Receiver: req.body.receiver,
    Message: req.body.message,
    Subject: req.body.subject,
    Date: req.body.date,
  });
  let newMessageCopy2 = new MessageSchema({
    Copy: req.body.receiver,
    Sender: req.body.sender,
    Receiver: req.body.receiver === req.body.sender ? "Me" : req.body.receiver,
    Message: req.body.message,
    Subject: req.body.subject,
    Date: req.body.date,
  });
  let user = await UserSchema.find({
    username: req.body.receiver
  });
  if (user.length === 0) {
    res.err = UserNotFound
    next()
  } else {
    newMessageCopy1.save((err) => {
      if (err) {
        console.log(err);
        res.err = err;
      } else {
        newMessageCopy2.save((err) => {
          if(err){
            console.log(err);
            res.err = err
          }
          else{
            res.newMessage = newMessageCopy2
          }
          next()
        })
      }
    });

  }
};