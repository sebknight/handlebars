const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('about/index', {
        title: 'about Page',
        layout: 'secondary'
    });
});

router.get('/us', function(req, res){
    res.render('about/us', {
        title: 'about Us Page'
    });
})

router.get('/product', function(req, res){
    res.render('about/product', {
        title: 'about the product Page'
    });
})


module.exports = router;
