var webpack = require('webpack');
var path = require('path');
var validate = require('webpack-validator');

var SRC = path.resolve(__dirname, 'src/main/js/');
var DEST = path.resolve(__dirname, 'src/main/resources/static/app/');

var config =  {
  cache: true,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    // 'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    SRC
  ],
  resolve: {
        extensions: ['', '.js', '.jsx']
  },
  output: {
    path: DEST, // Note: Physical files are only output by the production build task `npm run build`.
    filename: 'bundle.js',
    publicPath: 'http://localhost:9090/campaign-ui/app/',
    library: 'Campaign'
  },
  module: {
    preLoaders: [{test: /(\.jsx|\.js)$/, loader: 'eslint-loader', include: SRC, exclude: ['./node_modules']}],
    loaders: [
      {test: /(\.jsx|\.js)$/, include: SRC, loaders: ['babel']}, // handling jsx files
      {test: /(\.css|\.scss)$/, include: SRC, loader: 'style!css?sourceMap!autoprefixer-loader!sass?sourceMap'}, // Converting SCSS --> CSS files
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new webpack.HotModuleReplacementPlugin(), // Hot module reloading
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    port: 9090,
    proxy: {
        '/**': {
            target: 'http://localhost:8080/campaign-ui',
            secure: false,
            // node-http-proxy option - don't add /localhost:8080/ to proxied request paths
            prependPath: false
        }
    },
    publicPath: 'http://localhost:9090/campaign-ui/app/'
},
  debug: true,    // debug start and shows the info on terminal
  devtool: 'source-map',
  target: 'web',
  progress: true,
};
module.exports = validate(config);
