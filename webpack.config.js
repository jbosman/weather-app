const path = require('path');

module.exports = {
	entry: "./browser/react/index.js",
	output: {
		path: path.join(__dirname, './public'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules)/,
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				exclude: /(node_modules)/,
				test: /jsx?$/,
				loader: "babel-loader",
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				exclude: /(node_modules)/,
				test: /\.(jpg|png|svg)$/,
				loader: "url-loader"
			},
			{
				exclude: /(node_modules)/,
			  	test: /\.(svg|ttf|eot|woff|woff2)$/,
			  	loader: 'file-loader',
			  	options: {
			    	name: 'fonts/[name].[ext]',
				},
			},
			{
				exclude: /(node_modules)/,
			  	test: /\.(html|ico)$/,
			  	loader: 'file-loader',
			  	options: {
			  		name: '[name].[ext]'
			  	}
			},
			{
				exclude: /(node_modules)/,
			  	test: /\.(gif)$/,
			  	loader: 'file-loader',
			  	options: {
			  		name: 'gifs/[name].[ext]'
			  	}
			}
			
		]
	}
}