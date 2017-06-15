<template>
  <div class="header">
    <div class="web-size">
      <h1>
        <router-link to="/"><img src="../../assets/images/logo.png"></router-link>
      </h1>
      <menu-vue></menu-vue>
    </div>
  </div>
</template>

<script>
  import MenuVue from '../common/MenuVue.vue'
  export default {
    name: 'headerVue',
    components: {
      MenuVue: MenuVue
    }
  }
</script>
