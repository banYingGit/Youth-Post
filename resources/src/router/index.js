import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Iview from 'iview'
import '../assets/script/layout.js'
import 'iview/dist/styles/iview.css'
import '../assets/css/newIview.css'
import Index from '@/components/index/Index'
// /*account*/
import AccountList from '@/components/account/List'

Vue.use(Iview)
Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      // /*account*/
      path: '/account/list.html',
      name: 'accountList',
      component: AccountList
    }
  ]
})
