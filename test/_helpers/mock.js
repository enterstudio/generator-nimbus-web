"use strict";

const fs = require('fs');

exports.create = (json, done) => {
    fs.writeFile('.yo-rc.json', JSON.stringify(json), done);
}