require('dotenv').config();
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
console.log("Variable Name: ", process.env);

module.exports = {
    mode: 'production',
    entry: './src/index.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            templateParameters: {
                MMSI: process.env.MMSI,
            },
        }),
    ],
};