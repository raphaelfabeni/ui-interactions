// NPM Packages
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')

// Source & Dist
const source = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

// Files
const entryFiles = glob.sync(`./src/ui/**/*.styl`)

//
module.exports = (env, argv) => {

	// Env
	const DEV = 'development';
	const currentEnvironment = argv.mode || DEV;
	const isDev = currentEnvironment === DEV;

	return {
		entry: entryFiles.reduce(entries, {
			'all': ['./src/all.styl']
		}),
		
		output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: '[name].js'
	  },

		resolve: {
			modules: [source, 'node_modules']
		},

		optimization: {
			minimizer: isDev ? [] : [new OptimizeCSSAssetsPlugin({})]
		},

		module: {
			rules: [
				{
					test: /\.html$/,
					use: [
						{
							loader: "html-loader",
							options: { minimize: true }
						}
					]
				},
				{
					test: /\.styl$/,
					use: [
	          MiniCssExtractPlugin.loader,
						'css-loader',
						'stylus-loader?paths[]=./src'
	        ]
				}
			]
		},

		plugins: [
			new MiniCssExtractPlugin('[name].css'),
			new webpack.HotModuleReplacementPlugin()
		],

		devServer: {
			contentBase: [
				path.resolve(__dirname, "src/ui"),
				path.resolve(__dirname, "src/common")
	    ],
			watchContentBase: true,
			compress: true,
	    port: 9001
		}
	}

}

// Helpers
function entries(acc, file) {
	const dirname = path.basename(path.dirname(file))
	acc[`ui-${dirname}`] = dirname in acc ? acc[dirname].concat(file) : [file]
	return acc
}