const MessageSchema = require("../../../../models/MessageSchema");
module.exports = (prevUsername,NewUsername) => {
    
    try{
    MessageSchema.update(
        {Sender: prevUsername},
        {$set: {Sender: NewUsername}},
        { multi: true }, (err,raw) => {
            if(err){
                console.log(err)
            }else{
                console.log("SENDER Change from " + prevUsername + " To " + NewUsername)
                console.log(raw)
            }
        })
    }
    catch(err){}
};