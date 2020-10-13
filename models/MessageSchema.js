const mongoose = require("mongoose");
const uniq = require("mongoose-unique-validator");
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  Sender: { type: String, required: true },
  Receiver: { type: String, required: true },
  Message: { type: String, required: true },
  Subject: { type: String, required: true },
  Date: { type: String, required: true },
});
MessageSchema.plugin(uniq);
module.exports = mongoose.model("messages", MessageSchema);
