var webpack = require('webpack');
var path = require('path');
var validate = require('webpack-validator');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC = path.resolve(__dirname, 'src/main/js/');
var DEST = path.resolve(__dirname, 'src/main/resources/static/app/');


var config =  {
  cache: true,
  debug: false,    // debug start and shows the info on terminal
  entry: SRC,
  target: 'web',
  progress: true,
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  output: {
    path: DEST, // Note: Physical files are only output by the production build task `npm run build`.
    filename: 'bundle.js',
    publicPath: '/campaign-ui/app/',
    library: 'Campaign'
  },
  module: {
    preLoaders: [{test: /(\.jsx|\.js)$/, loader: 'eslint-loader', include: SRC, exclude: ['./node_modules']}],
    loaders: [
      {test: /(\.jsx|\.js)$/, include: SRC, loaders: ['babel']}, // handling jsx files
      {test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap!autoprefixer-loader')}, // Converting SCSS --> CSS files
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
        new ExtractTextPlugin('bundle.css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoErrorsPlugin()
  ]
};
module.exports = validate(config);
