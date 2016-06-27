"use strict";

const watch = require('watch');
const fs = require('fs');
const webpack = require("webpack");
const notifier = require('node-notifier');

function timeNow() {
    var d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
    return `${h}:${m}:${s}`;
}

function circular_stringify(o) {
    var cache = [];
    return JSON.stringify(o, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) return;
            cache.push(value);
        }
        return value;
    });
}

function compile() {
    console.log(`\n\ncompile [${timeNow()}]:\n`);
    webpack(
        require('./webpack.config'),
        function(err, stats) {
            var no_errors = true;
            if (err) {
                notifier.notify({
                    'title': 'ERROR (webpack callback)',
                    'message': err
                });
                no_errors = false;
            }
            var errs = stats.compilation.errors;
            if (errs && errs.length > 0) {
                // console.log("ERRORS", errs);
                // fs.writeFileSync("errors.json", circular_stringify(errs));
                notifier.notify({
                    'title': 'ERROR (compilation)',
                    'message': errs[0].message,
                    sound: true
                });
                no_errors = false;
            }
            console.log("STATS:", stats.toString({
                colors: true
            }));
            var deltaTime = stats.endTime - stats.startTime;
            if (no_errors) {
                notifier.notify({ 'title': 'No errors', 'message': `Time: ${deltaTime}ms` });
            }
        }
    );
}

compile();

watch.watchTree('src/', function(f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
        // Finished walking the tree
    } else {
        compile();
    }
});