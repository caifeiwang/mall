module.exports = {
    configureWebpack: {
        resolve: {
            // 配置路径别名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    },
    devServer: {
        proxy: {
            '/example': {
                target: 'https://easy-mock.com/mock/5d511f91f429f82e7a7c8522/example',
                changeOrigin: true,  //是否跨域  
                secure: false,    
                pathRewrite: {  
                    '^/example': '/'   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉  
                }
            }
        }
    }
}

