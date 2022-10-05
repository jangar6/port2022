const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsxRegex = /\.(js|jsx)$/; // js, jsx regex
const sassRegex = /(\.module|.*)\.(scss|sass)$/; // sass, scss, module regex

module.exports = (mode, options) => {
	const entryPoints = {
		App: {
			path: './index.jsx',
			outputHtml: './index.html',
			build: true,
		},
	};

	const entry = {};

	const plugins = [new webpack.HotModuleReplacementPlugin()];

	Object.entries(entryPoints).map(([key, value]) => {
		if (value.build) {
			entry[key] = value.path;
			if (options.mode === 'production') {
				plugins.push(
					new HtmlWebpackPlugin({
						inject: true,
						chunks: [key],
						index: './index.html',
						filename: value.outputHtml,
					}),
				);
			}
		}
		return null;
	});

	return {
		// entry: {
		//     main: ['./src/Main.jsx'],
		// },
		entry,
		resolve: {
			extensions: ['*', '.js', '.jsx'],
			alias: {
				'@style': path.resolve(__dirname, './src/style'),
				'@Azpp': path.resolve(__dirname, './src/App.jsx'),
				'@styles': path.resolve(__dirname, './src/style/style.scss'),
				'@var': path.resolve(__dirname, './src/style/_variable.scss'),
				'@redux': path.resolve(__dirname, './src/redux'),
			},
		},
		output: {
			// publicPath: "/",
			path: path.resolve(__dirname, './dist'),
			filename: '[name].js',
		},
		module: {
			rules: [
				{
					test: jsxRegex,
					include: [path.resolve(__dirname, './src')],
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env', '@babel/preset-react'],
							},
						},
					],
				},

				{
					test: /\.(css)$/,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: sassRegex,
					use: [
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: { localIdentName: '[name]_[local]_[hash:base64:5]' },
							},
						},
						'sass-loader',
					],
					exclude: /node_modules/,
				},
				{
					test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/',
							},
						},
					],
				},
			],
		},
		plugins,
		devServer: {
			host: 'localhost',
			port: 8080,
			// 시작페이지를 지정해 주는 부분
			// historyApiFallback: true,
		},
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000,
		},
	};
};
