<template>
  <div class="contain">
    <header-vue></header-vue>
    centercentercentercenter
  </div>
</template>

<script>
  import HeaderVue from '../HeaderVue'

  export default {
    name: 'hello',
    data: function () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      HeaderVue: HeaderVue
    }
  }
</script>
