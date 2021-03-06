const GetAllUsers = require("./Users/GetAllUsers");
const PostUser = require("./Users/PostUser");
const GetUserByID = require("./Users/GetUserByID");
const UpdateUserByID = require("./Users/UpdateUserByID");
const DeleteUserByID = require("./Users/DeleteUserByID");
const PatchUsernameByID = require("./Users/PatchUsernameByID")

const DeleteMessageByID = require("./Messages/DeleteMessageByID");
const PostMessage = require("./Messages/PostMessage");
const GetAllMessages = require("./Messages/GetAllMessages");

module.exports = {
  PostUser,
  GetAllUsers,
  GetUserByID,
  UpdateUserByID,
  DeleteUserByID,
  PatchUsernameByID,
  GetAllMessages,
  PostMessage,
  DeleteMessageByID,
};
