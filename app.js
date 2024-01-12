require("dotenv").config();

const app = require('express')();
var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);

http.listen(3000, function(){
    console.log('Server is running');
});


//video link https://youtu.be/hq-IKhRjIHQ?si=4wfQObv-GtMZBYv8 