const express = require('express');
const _ = require("lodash");
const underscore = require("underscore");
const externalModule = require('../logger/logger')
const helperModule = require("../util/helper.js")
const formatterModule = require("../validator/formatter.js")
const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule.log()
    console.log("todays date (dd/mm) - "+helperModule.dd()+"/"+helperModule.mm())
    helperModule.batchInfo()
    console.log("this is trim - "+formatterModule.trim)
    formatterModule.lower()
    formatterModule.upper()
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let firstElement = underscore.first(["s","a","c"]);
    console.log(firstElement);
    let arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let monthsArray = _.chunk(arr, 4);
    console.log(monthsArray);
    let oddArray = _.tail([1,3,5,7,9,11,13,15,17,19]);
    console.log(oddArray);
    res.send('Hello there!');
});
module.exports = router;
// adding this comment for no reason