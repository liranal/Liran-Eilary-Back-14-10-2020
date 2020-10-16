const UserSchema = require("../../../models/UserSchema");
const UsernameChanger = require("./UsernameChanger/UsernameChanger");

module.exports = (req, res, next) => {
  UserSchema.findByIdAndUpdate(req.params.id, {username:req.body.username},{new: true},(err, user) => {
    if (err) {
      res.err = err;
    } else {
      console.log(user)
      try{
      UsernameChanger(req.body.oldUsername, req.body.username)
      res.updatedUser = user;
      }
      catch(err){
        res.err = err;
      }
    }
    next();
  });
};
