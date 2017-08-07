<template>
  <div>
    <header-vue></header-vue>
    <menu-vue></menu-vue>
  </div>
</template>
<script>
  import HeaderVue from '../common/HeaderVue.vue'
  import MenuVue from '../common/MenuVue.vue'
  export default {
    name: 'mainVue',
    components: {
      MenuVue: MenuVue,
      HeaderVue: HeaderVue
    }
  }
</script>
