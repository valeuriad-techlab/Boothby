const fs = require("fs");

var log = function(message) {
    fs.appendFile('console.log', message + '\n', function (err) {
        if (err) throw err;
    });
}

exports.error = log;
exports.log = log;