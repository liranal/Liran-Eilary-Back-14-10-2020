const MessageSchema = require("../../../../models/MessageSchema");
module.exports = (prevUsername,NewUsername) => {
    try{
    MessageSchema.update(
        {Copy: prevUsername},
        {$set: {Copy: NewUsername}},
        { multi: true }, (err,raw) => {
            if(err){
                console.log(err)
            }else{
                console.log("COPY Change from " + prevUsername + " To " + NewUsername)
                console.log(raw)
            }
        })
    }
    catch(err){console.log(err)}
};