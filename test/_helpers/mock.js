"use strict";

const fs = require('fs');

exports.createYoRc = (json, done) => {
    fs.writeFile('.yo-rc.json', JSON.stringify(json), done);
};