const path = require('path');
module.exports = {
    entry: './Scripts/index.js',
    output: {
		path: path.resolve(__dirname, './Scripts/dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
       ]
    }
};