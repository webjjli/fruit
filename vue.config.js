const path = require('path')
const poststylus = require('poststylus')
const pxtorem = require('postcss-pxtorem')

const resolve = file => path.resolve(__dirname, file)
module.exports = {
	css: {
		loaderOptions: {
			stylus: {
				use: [
					poststylus([
						pxtorem({
							rootValue: 100,
							propWhiteList: [],
							minPixelValue: 2
						}),
						'autoprefixer'
					])
				],
				import: [
					resolve('./src/assets/theme.custom')
				]
			},
			postcss: {
				plugins: [
					require('postcss-pxtorem')({
						rootValue: 100,
						propWhiteList: [],
						minPixelValue: 2
					}),
					require('autoprefixer')()
				]
			}
		}
	},


	// 我是添加的代码  start
	publicPath: './', // 相对路径
	outputDir: './dist', // 构建输出目录    
	assetsDir: 'static', // 静态资源目录
	productionSourceMap: false,
	lintOnSave: false, // 是否开启 eslint 保存检测  
	// vue  跨域访问设置
	devServer: {
		https: false, // 是否启用 https 访问
		open: false, //配置自动启动浏览器
		proxy: {
			'/apis': {
				target: '', // 要请求的代理地址
				ws: true, // 是否跨域
				changeOrigin: true, // needed for virtual hosted sites
				pathRewrite: {
					'^/apis': '' // rewrite path
				}
			},
		}
	},

	// 我是添加的代码  end

	transpileDependencies: [
		'mand-mobile'
	]
}
