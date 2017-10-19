const dbUser = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('jsonwebtoken');

let register = (req,res)=>{
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(`${req.body.password}`, salt);
  modelUser.create({
      username: req.body.username,
      password: hash,
      email: req.body.email
  }, function(err, response){
    if(!err){
      res.send(response)
    } else {
      res.send(err)
    }
  })
}

// const login = (req,res)=> {
//   modelUser.findOne({
//     username: req.body.username
//   })
//   .then(result =>{
//
//   })
// }

module.exports = {
  register
};
