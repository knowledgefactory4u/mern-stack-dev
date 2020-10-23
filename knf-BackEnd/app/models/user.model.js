const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName :String ,
    emailId : String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);