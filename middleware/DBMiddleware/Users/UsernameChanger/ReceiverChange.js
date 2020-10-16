const MessageSchema = require("../../../../models/MessageSchema");
module.exports = (prevUsername,NewUsername) => {
    try{
    MessageSchema.update(
        {Receiver: prevUsername},
        {$set: {Receiver: NewUsername}},
        { multi: true }, (err,raw) => {
            if(err){
                console.log(err)
            }else{
                console.log("RECEIVER Change from " + prevUsername + " To " + NewUsername)
                console.log(raw)
            }
        })
    }
    catch(err){console.log(err)}
};