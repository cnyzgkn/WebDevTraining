var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/main.jsx'
    },
    output: {
        path: './build',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { 
              test: /\.js$|\.jsx$/,
              loader: 'babel-loader', 
              exclude: /node_modules/,
              query: {
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    },
};