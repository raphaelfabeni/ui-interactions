const path = require('path')
const webpack = require('webpack')
const rupture = require('rupture')
const postStylus = require('poststylus')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Routes
const routes = require('./routes')

module.exports = (env, argv) => {
	const aditionalCSSLoader = argv.mode === 'production'
		? [MiniCssExtractPlugin.loader]
		: []

	return {
		entry: {
			main: './src/main.js',
			...routes.reduce((prev, { name, entry }) => ({
				...prev,
				[name]: entry
			}), {})
		},
		output: {
			publicPath: '/'
		},
		module: {
			rules: [
				{
					test: [/\.jpg$/, /\.png$/, /\.svg$/, /\.pdf$/],
					use: {
						loader: 'url-loader',
						query: {
							limit: 1000,
							name: 'static/[name].[ext]'
						}
					}
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /.pug$/,
					use: {
						loader: 'pug-loader',
						query: {}
					}
				},
				{
        	test: /\.css$/,
					use: ['css-loader'],
				},
				{
					test: /.styl$/,
					use: [
						{
							loader: 'style-loader',
							options: {
								hmr: true
							}
						},
						...aditionalCSSLoader,
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								modules: false,
								sourceMap: true,
								minimize: true,
								discardComments: { removeAll: true }
							}
						},
						{ loader: 'stylus-loader' }
					]
				}
			]
		},
		plugins: [
			...routes.map(({ name, filename }) => 
				new HtmlWebpackPlugin({
					inject: true,
					chunks: ['main', name],
					template: `./src/pages/${name}/index.pug`,
					filename
				})
			),
			new MiniCssExtractPlugin({
				fileName: '[name].css'
			}),
			new webpack.LoaderOptionsPlugin({
				test: /\.styl$/,
				stylus: {
					preferPathResolver: 'webpack',
					default: {
						use: [
							postStylus([
								autoprefixer({ browsers: ['ie 10'] }),
								'css-mqpacker'
							]),
							rupture()
						]
					}
				},
				options: {
					context: __dirname
				}
			})
		],
		resolve: {
			extensions: ['.ts', '.js', '*'],
			alias: {
				assets: path.resolve(__dirname, './src/assets'),
				modules: path.resolve(__dirname, './src/modules')
			},
			modules: [
				path.resolve(__dirname, './src'),
				'node_modules'
			]
		}
	}
}