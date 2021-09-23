const webpack = require('webpack')
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin") 

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src/app'),
      utils: path.resolve(__dirname, 'src/utils'),
      styles: path.resolve(__dirname, 'src/styles'),
      store: path.resolve(__dirname, 'src/store'),
      services:path.resolve(__dirname, 'src/services')
     },
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": require.resolve("path-browserify"),
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "module":false,
      "os":false
     } 
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist'),
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, './public'),
    },
    compress: true,
    port: 9000,
    
  },
  plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    // new webpack.ProvidePlugin({
    //   process: 'process/browser',
    // }),
    new NodePolyfillPlugin(),

  ]
};