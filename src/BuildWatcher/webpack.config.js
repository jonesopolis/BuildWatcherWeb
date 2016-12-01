var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'wwwroot');

var config = {
    entry: APP_DIR + "/app.js",
    output: {
        path: APP_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    "stats": {
        "colors": true
    }
};

module.exports = config;