import Vue from 'vue' 
import App from './app.vue'
import './style/common.scss'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
new Vue({
    el:'#app',
    template: '<App/>',
    components: { App }
})