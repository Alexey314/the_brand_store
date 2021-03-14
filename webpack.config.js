const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        index: './src/js/index.js',
        product: './src/js/product.js',
        registration: './src/js/registration.js',
        catalog: './src/js/catalog.js',
        cart: './src/js/cart.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
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
            // {
            //     test: /\.s?css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            // },
            {
                test: /\.s?css$/,
                use: ["style-loader", 'css-loader', 'sass-loader']
            },
            { test: /\.(svg|woff|jpg|png)$/, use: ['file-loader'] }
        ]
    },
    plugins: [
    //     new MiniCssExtractPlugin({
    //     filename: 'style.css'
    // }),
        new CopyPlugin({
            patterns: [
                { from: "src/img", to: "img" },
                { from: "src/data", to: "data" },
                { from: "src/html", to: "" },
                { from: "src/favicon.ico", to: "" },
            ],
        }),]
};