const {
  GetAllUsers,
  PostUser,
  GetUserByID,
  UpdateUserByID,
  DeleteUserByID,
  PatchUsernameByID,
} = require("../middleware/DBMiddleware/DBMiddleware");
const express = require("express");
const VerifyToken = require("../middleware/AuthMiddleware/VerifyToken");
const { UserAlreadyExist } = require("../Responses");
const router = express.Router();

router.get("/", [VerifyToken, GetAllUsers], (req, res) => {
  if (res.err) {
    return res.status(500).send("There was a problem finding the users.");
  } else {
    res.json([...res.Users]);
  }
});

router.get("/:id", [VerifyToken, GetUserByID], (req, res) => {
  if (res.err) {
    return res.status(500).send("There was a problem finding the user.");
  } else {
    res.json(res.user);
  }
});

router.post("/", [VerifyToken, PostUser], (req, res) => {
  if (res.err) {
    res
      .status(500)
      .send("There was a problem adding the information to the database.");
  } else {
    res.json(res.newUser);
  }
});

router.put("/:id", [VerifyToken, UpdateUserByID], (req, res) => {
  if (res.err) {
    res.status(500).send("There was a problem updating the user.");
  } else {
    res.json(res.updatedUser);
  }
});

router.patch("/:id", [VerifyToken, PatchUsernameByID], (req, res) => {
  if (res.err) {
    if(res.err.code === 11000){
      return res.status(UserAlreadyExist.Code).send(UserAlreadyExist.Message)
    }
    res.status(500).send("There was a problem updating the user.");
  } else {
    res.json(res.updatedUser);
  }
});

router.delete("/:id", [VerifyToken, DeleteUserByID], (req, res) => {
  if (res.err) {
    res.status(500).send("There was a problem deleting the user.");
  } else {
    res.send("Success");
  }
});

module.exports = router;
