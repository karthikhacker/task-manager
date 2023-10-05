const express = require('express');
const app = express();
const config = require('./server/config/config');
const mongoose = require('mongoose');

app.use(express.json());

// mongoogse connection 
mongoose.connect(config.mongo_url)
    .then(() => console.log('Mongodb connected'))
    .catch(error => console.log('Error connecting db'));
//server 
app.listen(config.port, () => {
    console.log('App running at port ', config.port);
})