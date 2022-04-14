const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	publicPath: './',
	lintOnSave: process.env.NODE_ENV !== 'production',
	productionSourceMap: false,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@assets', resolve('src/assets'))
			.set('@common', resolve('src/common'))
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/common/scss/mixin.scss";
							  @import "@/common/scss/variable.scss";`
			}
		}
	},
	devServer: {
		host: "localhost",
		port: 3000,
		proxy: {
			"/api": {
				target: "https://geoapi.qweather.com",
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	}
}
