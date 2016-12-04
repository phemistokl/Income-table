const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: "./src/main.js",
	output: {
		path: __dirname + '/public/build',
		publicPath: "build/",
		filename: "bundle.js"
	},
	watch: NODE_ENV === 'development',
	devtool: NODE_ENV === 'development' && 'eval-source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!autoprefixer-loader",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.scss$/,
        loader: "style!css!sass",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.gif$/,
				loader: "url-loader?limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg$/,
				loader: "url-loader?limit=10000&mimetype=image/jpg"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=10000&mimetype=image/png"
			},
			{
				test: /\.svg$/,
				loader: "url-loader?limit=10000&mimetype=image/svg+xml"
			},
			{
				test: /\.jsx$/,
				loader: "babel",
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.json$/,
				loader: "json-loader"
			},
		]
	},
	plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        })
  	]
};
