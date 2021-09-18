import VueRouter from 'vue-router'
import PageRouter from './page/index.js'
const Router = new VueRouter()
// 获取全部menu
Router.addRoutes([...PageRouter, ...ViewsRouter])

const orignPush = Router.push
const orignReplace = Router.replace
Router.push = function(...args) {
  orignPush.apply(Router, args).catch(err => err)
}
Router.replace = function(...args) {
  orignReplace.apply(Router, args).catch(err => err)
}
export default Router
