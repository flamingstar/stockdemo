#!/usr/bin/nodejs

var fs = require('fs');

function load(file, cb) {
        fs.readFile(file, function(err, data) {
                if (err){
                    throw err;
                }
                cb(JSON.parse(data.toString()));
        });
}

var jsonPath='./data/stock.json';

load(jsonPath, function(obj) {
    console.log(obj);

    console.log(obj.name);
});