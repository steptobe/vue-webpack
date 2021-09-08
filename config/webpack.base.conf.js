// webpack的开发环境和生产环境共同配置
// 开发环境的需求：

// 　　　　模块热更新  （本地开启服务，实时更新）
// 　　　　sourceMap    (方便打包调试)
// 　　　　接口代理　    (配置proxyTable解决开发环境中的跨域问题)

// 　　　　代码规范检查 (代码规范检查工具)

// 　　生产环境的需求：

// 　　　　提取公共代码　 　　    
// 　　　　压缩混淆(压缩混淆代码，清除代码空格，注释等信息使其变得难以阅读)
// 　　　　文件压缩/base64编码(压缩代码，减少线上环境文件包的大小)
// 　　　　去除无用的代码



// 　　开发环境和生产环境的共同需求：

// 　　　　同样的入口
// 　　　　同样的代码处理(loader处理)
// 　　　　同样的解析配置


const path = require('path');
//清除build/dist文件夹文件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
//生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//将css提取到单独的文件中
const MiniCssExtract = require('mini-css-extract-plugin');
//css压缩
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
//压缩js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//引入webpack
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
console.log(NODE_ENV);
module.exports = {
    //webpack 入口文件
    entry: './src/main.js',
    //webpack 输出文件配置
    output: {
        //输出文件路径
        path: path.resolve(__dirname, 'dist'),
        //输出文件名
        filename: 'k-editor.[hash:8].js',
    },
    //配置插件
    plugins: [
        //使用插件清除dist文件夹中的文件
        new CleanWebpackPlugin({
            path: './dist'
        }),
        //使用插件生成Html入口文件
        new HtmlWebpackPlugin({
            //模板文件路径
            template: "./src/index.html",
            //模板文件名
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true, //删除双引号,
                collapseWhitespace: true, //压缩成一行，
            },
            hash: true
        }),
        //提取css到style.css中
        new MiniCssExtract({
            filename: 'style.css'
        }),
    ],
    resolve: {
        // modules: [path.resolve('node_modules')],//只在当前目录下查找
        alias: { //配置项通过别名来把原导入路径映射成一个新的导入路径
            'vue$': 'vue/dist/vue.esm.js'
        }
        // mainFields: ['style', 'main'],//优先寻找style，
        // mainFiles: [],//入口文件的名字,默认index.js
        // extensions: ['js', 'css', 'json', 'vue']//扩展名顺序
    },
    //loader加载器模块配置
    module: {
        rules: [{
                //正则表达式匹配.css为后缀的文件
                test: /\.(c|sc|sa)ss$/,
                //使用loader
                use: [
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
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
            },
            {
                test: /\.js$/, //普通的loader
                //不包括node_modules
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader"
                }]
            },
            {
                test: /\.html$/,
                use: ['html-withimg-loader']
            },
            {
                test: /\.(gif|png|jpg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        //图片小于10kb就是图片地址，大于正常打包成base64格式编码    
                        limit: 10000,
                        //输出路径
                        outputPath: 'img/'
                    }
                }]
            }
        ]
    },
};