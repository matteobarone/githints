const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
});

module.exports = {
    entry: './src/app/app.ts',
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {minimize:false}
            }]
        },{
            test: /\.scss$/,
            use: extractCSS.extract({
                fallback: 'style-loader',
                use: ['css-loader?url=false', 'postcss-loader', 'sass-loader'],
            })
        },{
            test: /\.spec?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },{
            test: /\.js$/,
            use: [
                {loader: 'ng-annotate-loader?single_quotes'},
                {loader: 'babel-loader'}
            ]
        }]
    },
    plugins: [
        extractCSS,
        new webpack.LoaderOptionsPlugin({options: {postcss: [require('autoprefixer')]}}),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};