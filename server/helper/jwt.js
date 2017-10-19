const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSalt(10)
const hash = bcrypt.hashSync("B4c)/\/", salt)
require('dotenv').config()

let hashLogin = (req,res, next)=>{
  jwt.verify(req.headers.token, process.env.KEY, function(err, decoded){
    if(err){
      console.log('login dulu');
    } else {
      req._id = decoded._id
      req.fb_id = decoded.fb_id
      next()
    }
  })
}

module.exports = {hashLogin};
