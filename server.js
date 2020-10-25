const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true, useUnifiedTopology: true } 
);

requireDir('./src/models');

const Product = mongoose.model('Product')

app.get('/', (req, res) => {
    Product.create({
        title: "React",
        description: "Build native apps",
        url: 'htt://bararau.com'
    });

    return res.send("Hello MANsss!")

});

app.listen(3001);