module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://v.juhe.cn/toutiao',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}