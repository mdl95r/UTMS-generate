module.exports = {
	mode: 'production',
	entry: {
		app: './src/js/index.js',
	},
	output: {
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			}
		]
	},
};