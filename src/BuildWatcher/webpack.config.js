var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'wwwroot');

var config = {
    entry: {
        app: APP_DIR + "/index.js",
        vendor: ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk', 'axios', 'react-bootstrap', 'jquery', 'ms-signalr-client']
    },
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
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
        new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", "window.jQuery": "jquery" })        
    ]
};

module.exports = config;