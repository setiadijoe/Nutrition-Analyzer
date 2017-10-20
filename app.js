const express = require('express');
const bodyParser = require('body-parser');
const app = express()


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const nutritionixZomato = require('./routes/nutritionixZomato')

app.use('/nutritionixZomato', nutritionixZomato)


app.listen(3000,(err)=>{
    console.log('3000 OK');
})
