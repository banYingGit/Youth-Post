<template>
  <div>
    <header-vue></header-vue>
    <div class="web-size">
      <div style="margin-top: 50px" class="tree">
        <ul>
          <li v-for="one in listData">
            <p><input type="text" v-model="one.title"></p>
            <ul>
              <li v-for="two in one.child">
                <p><input type="text" v-model="two.title"></p>
                <ul>
                  <li v-for="three in two.child"><p><input type="text" v-model="three.title"></p></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderVue from '../common/HeaderVue.vue'
  export default {
    name: 'List',
    data: function () {
      return {
        listData: ''
      }
    },
    components: {
      HeaderVue: HeaderVue
    },
    created: function () {
      var url = '/static/data/list2.json'
      this.$ajax_get(url, function (data) {
        console.log('data---', data)
        this.listData = data
      })
    }
  }
</script>
