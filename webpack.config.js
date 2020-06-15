const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  // webpack will take the files from ./src/index
  entry: './src/index',
  devtool: 'inline-source-map',

  // and output it into /dist as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@views': path.resolve(__dirname, './src/views/'),
      '@middleware': path.resolve(__dirname, './src/middleware/'),
      '@providers': path.resolve(__dirname, './src/providers/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new Dotenv(),
  ],
  devServer: {
    port: 8000,
    host: "localhost"
  },
};
