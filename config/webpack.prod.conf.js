// 生产环境 配置
const { merge } = require("webpack-merge");
const base = require("./webpack.base.conf");

const path = require("path");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(base, {
  mode: "production",
  optimization: {
    minimizer: [
      //压缩CSS代码
      // new OptimizeCss(),
      // new OptimizeCss({
      //   // cssProcessor: require("cssnano"), //引入cssnano配置压缩选项
      //   cssProcessorOptions: {
      //     discardComments: { removeAll: true },
      //   },
      //   canPrint: true, //是否将插件信息打印到控制台
      // }),
      //压缩js代码
      new UglifyJsPlugin({
        //启用文件缓存
        cache: true,
        //使用多线程并行运行提高构建速度
        parallel: true,
        //使用 SourceMaps 将错误信息的位置映射到模块
        sourceMap: true,
      }),
    ],
  },
  devtool: 'hidden-source-map',
  plugins: [
    //使用插件定义全局变量DEV
    new webpack.DefinePlugin({
      DEV: JSON.stringify("production"),
    }),
  ],
});
