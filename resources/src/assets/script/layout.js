/**
 * Created by banYing on 2017/6/9.
 */
import Vue from 'vue'
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.use({
  install: function (Vue, options) {
    Vue.prototype.$ajax_get = function (url, fn) {
      this.$http.get(url).then(function (response) {
        fn && fn.call(this, response.data.result, 'success', response)
      }, function (response) {
        fn && fn.call(this, response.data.result, 'fail', response)
      })
    }
  }
})
