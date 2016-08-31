module.exports = {
	entry: {
		main: "./dm12/App.js"
	},
	output: {
		path: "./public",
		filename: "bundle.js"
	},
	devtools: "sourcemap",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			}	
		]	
	}
}
