let path = require('path')
let webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:['babel-polyfill', './src/main.js'],
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'build.js'
    },
    devServer:{
        historyApiFallback:true, // 是用于如果找不到界面就返回默认首页
        overlay:true
    },
    resolve: {//Resolve 配置 Webpack 如何寻找模块所对应的文件
        alias: {//配置项通过别名来把原导入路径映射成一个新的导入路径
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options: {
                    loaders: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            }
        ]
    }

}