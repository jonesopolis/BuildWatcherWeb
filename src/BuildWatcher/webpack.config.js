var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'wwwroot');

var config = {
    entry: APP_DIR + "/index.js",
    output: {
        path: APP_DIR,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
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
    },
    modules: [
        path.resolve('./'),
        path.resolve('./node_modules')
    ],
    devtool: 'source-map'
};

module.exports = config;