const express = require('express')
const router = express.Router()
var unirest = require('unirest')
var zomato = require('zomato')


router.get('/nutritionix', (req,res)=>{
    unirest.get("https://nutritionix-api.p.mashape.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat") //${}
        .header("X-Mashape-Key", "uuAwWC6Lvymshy8puuz1SxUMfX5dp1mx4rKjsnVrQcHnzR0Jrl")
        .header("Accept", "application/json")
        .end(function (result) {
            console.log(result.status, result.headers, result.body);
            res.send(result)
        });
})
router.get('/zomato',(req,res)=>{
    unirest.get(`https://developers.zomato.com/api/v2.1/search?q=ayam`) //${}
        // .header("X-Zomato-API-Key", "ea4bd97a1f2b8f0c8d3293d8c1e592d9Dasar1000")
        // .header("Accept", "application/json")
        .send({ "parameter": 'ea4bd97a1f2b8f0c8d3293d8c1e592d9Dasar1000'})
        .end(function (result) {
            console.log(result.status, result.headers, result.body);
        });
})


module.exports = router

