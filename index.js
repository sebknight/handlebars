const express = require('express');
var app = express();
const router = express.Router();


const home = require('./routes/index');
const about = require('./routes/about');

app.use('/', home);
app.use('/about', about);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
    console.log('Server is running on port '+app.get('port'));
})
