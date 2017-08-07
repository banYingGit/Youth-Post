<template>
  <div class="header">
    <div class="web-size">
      <h1>
        <router-link to="/"><img src="../../assets/images/logo.png"></router-link>
      </h1>

      <div class="out-btn" title="退出">
        <Icon type="log-out"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headerVue'
  }
</script>
