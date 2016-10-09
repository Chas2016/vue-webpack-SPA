/**
 * Created by chen on 2016/9/29.
 */
var path = require('path');

var PATH_ROOT = path.resolve(__dirname);
var PATH_DIST = path.resolve(PATH_ROOT,'dist');

var config = {
	entry: {
		index:[ path.resolve(PATH_ROOT,'src/main.js'),path.resolve(PATH_ROOT,'src/assets/init.css')]
	},
	output: {
		path: PATH_DIST,
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	//devServer: {
	//	historyApiFallback: true,
	//	hot: false,
	//	inline: true,
	//	grogress: true,
	//},

	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	},
	resolve: {
 		extensions: ['', '.js', '.vue'],
		// 别名，可以直接使用别名来代表设定的路径以及其他
		//alias: {
 		//	components: path.join(__dirname, './components')
		//}
	},
	module: {
		noParse: /es6-promise\.js$/,
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
			},
			{
				test: /\.css$/,
				loader: 'style!css'

			},
			{
				test: /\.scss/,
				loader: 'style!css!sass'
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	//plugins: [
	//	new webpack.DefinePlugin({
	//		'procee.env': {
	//			NODE_ENV: '"production"'
	//		}
	//	}),
	//	new webpack.optimize.UglifyJsPlugin({
	//		compress: {
	//			warnings: false
	//		}
	//	})
	//]

}
if (process.env.NODE_ENV === 'production') {
	config.plugins = [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	]
} else {
	config.devtool = '#source-map'
}
module.exports = config;