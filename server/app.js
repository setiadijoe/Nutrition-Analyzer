const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors')
mongoose.connect('mongodb://localhost/Nutrition-Analyzer');
const db = mongoose.connection;

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

var users = require('./routes/users');

app.use('/users', users);


app.listen(3000, ()=>{
  console.log('live on 3000');
})
