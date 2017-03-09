var webpack = require('webpack');
var path = require('path');
// var validate = require('webpack-validator');

var SRC = path.resolve(__dirname, 'src/main/js/');
var DEST = path.resolve(__dirname, 'src/main/resources/static/app/');


var config =  {
  debug: true,    // debug start and shows the info on terminal
  devtool: 'inline-source-map',
  noInfo: false,  // all the bundling files info
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    SRC
  ],
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  target: 'web',  // for providing browser specific web files
  output: {
    path: DEST, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Hot module reloading
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /(\.jsx|\.js)$/, include: SRC, loaders: ['babel']}, // handling jsx files
      {test: /(\.css|\.scss)$/, loader: 'style!css!sass'}, // Converting SCSS --> CSS files
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  devServer: {
    port: 9090,
    proxy: {
        '/**': {

            target: 'http://localhost:8080/compaign-ui',

            secure: false,
            // node-http-proxy option - don't add /localhost:8080/ to proxied request paths
            prependPath: false
        }
    },
    publicPath: 'http://localhost:9090/compaign-ui/app/'
}
};
module.exports = config;
