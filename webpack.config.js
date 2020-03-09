const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// ExtractTextPlugin is deprecated use MiniCssExtractPlugin as above
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        minimize: true
                    },
                  },
                  'css-loader',
                  'sass-loader',
                ],
            },

            // ExtractTextPlugin is deprecated use MiniCssExtractPlugin as above

            // ,{
            //     test: /\.scss$/,
            //     use: ExtractTextPlugin.extract({
            //         use: [{
            //             loader: 'css-loader',
            //             options: {
            //                 minimize: true
            //             }
            //         },
            //         'sass-loader'
            //       ]
            //     })
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'main.css',
            chunkFilename: 'main.css',
          }),
        // ExtractTextPlugin is deprecated use MiniCssExtractPlugin as above
        // new ExtractTextPlugin('style.css')
    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}