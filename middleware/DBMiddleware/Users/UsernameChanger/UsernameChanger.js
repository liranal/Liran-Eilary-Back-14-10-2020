const SenderChange = require('./SenderChange')
const ReceiverChange = require('./ReceiverChange')
const CopyChanger = require('./CopyChanger')

module.exports = (prevUsername,NewUsername) => {
    CopyChanger(prevUsername,NewUsername)
    ReceiverChange(prevUsername,NewUsername)
    SenderChange(prevUsername,NewUsername)
};