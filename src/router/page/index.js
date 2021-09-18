export default [
  {
    path: '/',
    name: '主页',
    redirect: '/index'
  },
  {
    path: '/index',
    name: '主页',
    component: () => import('@/view/index.vue')
  }
]
