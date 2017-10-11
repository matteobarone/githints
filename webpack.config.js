const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
});

const babelOptions = {
  "presets": ["es2015"]
};

module.exports = {
    cache: true,
    entry: './src/app/app.bootstrap.ts',
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
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions
            },
            {
              loader: 'ts-loader'
            }
          ]
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: babelOptions
            }
          ]
        }]
    },
    plugins: [
        extractCSS,
        new webpack.LoaderOptionsPlugin({options: {postcss: [require('autoprefixer')]}}),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};