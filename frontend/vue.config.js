module.exports = {
    css: {
        loaderOptions: {
            scss: {
                data: `@import "@/assets/scss/_global.scss";`
            },

        }
    },
    configureWebpack: (config) => {
		return {
			devServer: {
				proxy: {
					'/rout': {
						target: 'http://0.0.0.0:3000',
						secure: false,
						changeOrigin: true

					}
				}
			}
		}
	}
}