<template>
  <div>
    <header-vue></header-vue>
    <div class="web-size">
      <div class="pannel pannel-auto">
        <p class="pannel-title">示例</p>
        <div class="pannel-box">
          <ul class="ionic-list">
            <li>
              <Icon type="ionic"></Icon>
              <p>ionic</p>
            </li>
            <li>
              <Icon type="arrow-up-a"></Icon>
              <p>arrow-up-a</p>
            </li>
            <li>
              <Icon type="arrow-right-a"></Icon>
              <p>arrow-right-a</p>
            </li>
            <li>
              <Icon type="arrow-down-a"></Icon>
              <p>arrow-down-a</p>
            </li>
            <li>
              <Icon type="arrow-left-a"></Icon>
              <p>arrow-left-a</p>
            </li>
            <li>
              <Icon type="arrow-up-b"></Icon>
              <p>arrow-up-b</p>
            </li>
            <li>
              <Icon type="arrow-right-b"></Icon>
              <p>arrow-right-b</p>
            </li>
            <li>
              <Icon type="arrow-down-b"></Icon>
              <p>arrow-down-b</p>
            </li>
            <li>
              <Icon type="arrow-left-b"></Icon>
              <p>arrow-left-b</p>
            </li>
            <li>
              <Icon type="arrow-up-c"></Icon>
              <p>arrow-up-c</p>
            </li>
            <li>
              <Icon type="arrow-right-c"></Icon>
              <p>arrow-right-c</p>
            </li>
            <li>
              <Icon type="arrow-down-c"></Icon>
              <p>arrow-down-c</p>
            </li>
            <li>
              <Icon type="arrow-left-c"></Icon>
              <p>arrow-left-c</p>
            </li>
            <li>
              <Icon type="arrow-return-right"></Icon>
              <p>arrow-return-right</p>
            </li>

            <li>
              <Icon type="arrow-return-left"></Icon>
              <p>arrow-return-left</p>
            </li>
            <li>
              <Icon type="arrow-swap"></Icon>
              <p>arrow-swap</p>
            </li>
            <li>
              <Icon type="arrow-shrink"></Icon>
              <p>arrow-shrink</p>
            </li>
            <li>
              <Icon type="arrow-expand"></Icon>
              <p>arrow-expand</p>
            </li>
            <li>
              <Icon type="arrow-move"></Icon>
              <p>arrow-move</p>
            </li>
            <li>

              <p></p>
            </li>
            <li>

              <p></p>
            </li>
            <li>

              <p></p>
            </li>
            <li>

              <p></p>
            </li>
            <li>

              <p></p>
            </li>
            <li>

              <p></p>
            </li>
            <li>

              <p></p>
            </li>
            <li>

              <p></p>
            </li>
            <li>

              <p></p>
            </li>
          </ul>
        </div>

      </div>
      <br/><br/>
      <h2>API _ Ionic props</h2>
      <br/>
      <Table border :columns="columnsProps" :data="dataProps"></Table>
      <br/><br/>
      <br/><br/>
    </div>
  </div>
</template>
<script>
  import HeaderVue from '../common/HeaderVue.vue'
  export default{
    data: function () {
      return {
        columnsProps: [{}],
        dataProps: [{}]
      }
    },
    created: function () {
      var url = '/static/data/dataAPI/iconAPI.json'
      this.$ajax_get(url, function (data) {
        this.columnsProps = data.columnsProps
        this.dataProps = data.dataProps
      })
    },
    components: {
      HeaderVue: HeaderVue
    }
  }
</script>
<style>
  .ionic-list:after {
    display: block;
    clear: both;
    content: '';
  }

  .ionic-list li {
    display: block;
    float: left;
    width: 125px;
    height: 100px;
    text-align: center;
    font-size: 30px;
    color: #5c6b77;
  }

  .ionic-list li p {
    font-size: 14px;
  }
</style>
