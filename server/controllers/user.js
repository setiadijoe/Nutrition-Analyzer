const modelUser = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


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

const login = (req,res)=> {
  modelUser.findOne({
    username: req.body.username
  })
  .then(result =>{
    console.log('masuk');
    if(result == null){
      res.send({msg:'username not found'})
    } else {
      if(bcrypt.compareSync(req.body.password, result.password)) {
        let token = jwt.sign({
          _id:result._id,
          username: result.username,
          email: result.email
        },process.env.KEY)
        res.send({ token: token, msg:"login success"})
      } else {
        res.send({msg:'password incorrect'})
      }
    }
  })
  .catch(err =>{
    res.send({msg:'username not found'})
  })
}

let all = (req,res)=>{
  modelUser.find({}, function(err, result){
    if(!err){
      res.send(result)
    } else {
      res.send(err)
    }
  })
}

module.exports = {
  register,
  login,
  all

};
