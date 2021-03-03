const path = require('path');

module.exports = {
    entry: './src/js/catalog.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
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
            }
        ]
    }
};