<template>
  <div class="menu">
    <Menu :width="width" mode="vertical" theme="light">
      <Menu-item name="1">
        <Icon type="android-contacts"></Icon>
        <router-link to="/account/list.html">用户管理</router-link>
      </Menu-item>
      <Menu-item name="2">
        <Icon type="ios-paper"></Icon>
        <router-link to="/account/list.html">课程管理</router-link>
      </Menu-item>

    </Menu>
  </div>
</template>
<script>
  export default {
    name: 'menuVue',
    data: function () {
      return {
        width: '200'
      }
    }
  }
</script>
