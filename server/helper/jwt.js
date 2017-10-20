const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0/\/", salt);
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
