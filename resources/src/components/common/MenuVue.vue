<template>
  <div class="menu">
    <Menu :width="width" mode="horizontal">
      <Submenu name="1">
        <template slot="title">
          Basic 组件
        </template>
        <Menu-item name="1-1">
          <router-link to="/basic/button.html">Button 按钮</router-link>
        </Menu-item>
        <Menu-item name="1-2">
          <router-link to="/basic/icon.html">Icon 图标</router-link>
        </Menu-item>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          Form 组件
        </template>
        <Menu-item name="2-1">
          <router-link to="/Form/input.html">Input 输入框</router-link>
        </Menu-item>
        <Menu-item name="2-2">
          <router-link to="/Form/radio.html">Radio 单选框</router-link>
        </Menu-item>
      </Submenu>
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
