var express = require('express');
var router = express.Router();
const request = require('request');

const apiKey = '4ddca426-7eb3-456a-a7db-0d292dec37a2';
const apiBaseUrl = 'https://api.thecatapi.com/v1/images/search?breed_id=beng';
const landingPageUrl = `${apiBaseUrl}`;
const imageBaseUrl='https://cdn2.thecatapi.com/images/snxE5_PPX.jpg';

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(apiBaseUrl, (error, response, catData)=> {
    // console.log("=============The error ========")
    // console.log(error)
    // console.log("========= the response ==========")
    // console.log(response)
    // console.log(catData)
    const parsedData = JSON.parse(catData)
    console.log(parsedData)

  })
  res.render('index', { });
});

module.exports = router;
