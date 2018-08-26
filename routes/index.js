const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.end('this is coming from the home route');
});

router.get('/home', function(req, res){
    res.end('this is coming from the home route');
});

module.exports = router;
