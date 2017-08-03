import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Iview from 'iview'
import '../assets/script/layout.js'
import 'iview/dist/styles/iview.css'
import '../assets/css/newIview.css'
import Index from '@/components/index/Index'
// /*basic*/
import Button from '@/components/Basic/Button'
import Icon from '@/components/Basic/Icon'
// /*form*/
import Input from '@/components/form/input'

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
      // /*basic*/
      path: '/basic/button.html',
      name: 'button',
      component: Button
    },
    {
      // /*basic*/
      path: '/basic/icon.html',
      name: 'icon',
      component: Icon
    },
    {
      // /*form*/
      path: '/form/input.html',
      name: 'input',
      component: Input
    }
  ]
})
