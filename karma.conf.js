"use strict";
let webpackConfig = require("./webpack.config");

module.exports = function(config) {
    config.set({
        browsers: ["Chrome"],
        singleRun: true,
        frameworks: ["mocha"],
        files: ["app/tests/**/*.test.jsx"],
        preprocessors: {
            "app/tests/**/*.test.jsx": ["webpack", "sourcemap"]
        },
        reporters: ["mocha"],
        client: {
            mocha: {
                timeout: "2000"
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};