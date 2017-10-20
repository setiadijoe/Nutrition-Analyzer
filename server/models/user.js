const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  fb_id : String,
  username : String,
  name : String,
  password : String,
  email : String
})

let Users = mongoose.model('Users', UserSchema)

module.exports = Users;
