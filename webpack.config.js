const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/js/catalog.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'catalog.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            { test: /\.(svg|woff|jpg|png)$/, use: ['file-loader'] }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: 'style.css'
    }),
        new CopyPlugin({
            patterns: [
                { from: "src/img", to: "img" },
            ],
        }),]
};