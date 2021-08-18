const px2rem = require('postcss-px2rem');
const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@import "@/common/scss/mixin.scss";
					@import "@/common/scss/variable.scss";
				`
			}
		}
	},
	publicPath: './',
	chainWebpack: (config) => {
			config.resolve.alias
				.set('@', resolve('src'))
				.set('@assets', resolve('src/assets'))
				.set('common', resolve('src/common'))
		}
}
