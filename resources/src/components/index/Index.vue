<template>
  <div>
    <main-vue></main-vue>
    <div class="contain">
      <div class="pannel">
        <Row class="search">
          <Col span="10">
          <Col span="8">
          <span class="title">职工姓名：</span></Col>
          <Col span="16">
          <Input v-model="search.name" placeholder="请输入职工姓名" size="large"></Input></Col></Col>
          <Col span="10">
          <Col span="8">
          <span class="title"> 职工编号：</span></Col>
          <Col span="16">
          <Input v-model="search.card" placeholder="请输入职工编号" size="large"></Input></Col></Col>
          <Col span="4">
          <Button type="primary" icon="ios-search" class="right">查 找</Button>
          </Col>
        </Row>
      </div>
      <div class="m-l-r-20 m-t-20">
        <Row :gutter="20">
          <Col span="6">
          <div class="pannel count-box">
            <p class="ico-bg info-bg">
              <Icon type="person-stalker"></Icon>
            </p>
            <div class="count">
              用户总数
              <P class="info-text">88551</P>
            </div>
          </div>
          </Col>

          <Col span="6">
          <div class="pannel count-box">
            <p class="ico-bg success-bg">
              <Icon type="person-add"></Icon>
            </p>
            <div class="count">
              新增用户数
              <P class="success-text">311</P>
            </div>
          </div>
          </Col>
          <Col span="6">
          <div class="pannel count-box">
            <p class="ico-bg warning-bg">
              <Icon type="ios-briefcase"></Icon>
            </p>
            <div class="count">
              在职员工数
              <P class="warning-text">55367</P>
            </div>
          </div>
          </Col>
          <Col span="6">
          <div class="pannel count-box">
            <p class="ico-bg danger-bg">
              <Icon type="ribbon-b"></Icon>
            </p>
            <div class="count">
              退休员工数
              <P class="danger-text">32551</P>
            </div>
          </div>
          </Col>
        </Row>
      </div>
      <div class="m-l-r-20 m-t-20">
        <Row :gutter="20">
          <Col span="12">
          <div class="pannel">
            <div class="chart">
              <schart canvasId="chartUserId"
                      type="bar"
                      width="510"
                      height="350"
                      :data="chartUser.userData"
                      :options="chartUser.options"
              ></schart>
            </div>
          </div>
          </Col>

          <Col span="12">
          <div class="pannel">
            <div class="chart">
              <schart canvasId="chartWagesId"
                      type="pie"
                      width="510"
                      height="350"
                      :data="chartWages.wagesData"
                      :options="chartWages.options"
              ></schart>
            </div>
          </div>
          </Col>
        </Row>
      </div>
      <div class="m-l-r-20 m-t-20">
        <Row :gutter="20">
          <Col span="16">
          <div class="pannel">
            <div class="chart-large">
              <schart canvasId="chartEatId"
                      type="line"
                      width="700"
                      height="350"
                      :data="chartEat.eatData"
                      :options="chartEat.options"
              ></schart>
            </div>
          </div>
          </Col>
          <Col span="8">

          <Card class="new-box">
            <p slot="title">
              <Icon type="ios-gear"></Icon>
              系统通知
            </p>
            <a href="#" slot="extra">
              <Icon type="ios-loop-strong"></Icon>
              换一换
            </a>
            <ul class="new-list">
              <li v-for="item in newList">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>{{ item.time }}</span>
              </li>
            </ul>
          </Card>


          </Col>
        </Row>

      </div>
    </div>
  </div>
</template>

<script>
  import Schart from 'vue-schart'
  import MainVue from '../common/MainVue.vue'
  export default {
    name: 'main',
    data: function () {
      return {
        search: {
          name: '',
          card: ''
        },
        chartUser: {
          userData: [
            {name: '2014', value: 1342},
            {name: '2015', value: 2123},
            {name: '2016', value: 1654},
            {name: '2017', value: 1795}
          ],
          options: {
            title: '东财E服务新增用户量'
          }
        },
        chartWages: {
          wagesData: [
            {name: '2014', value: 1342},
            {name: '2015', value: 2123},
            {name: '2016', value: 1654},
            {name: '2017', value: 1795}
          ],
          options: {
            title: '东财教职工工资发放量'
          }

        },
        chartEat: {
          eatData: [
            {name: '1', value: 1342},
            {name: '2', value: 2123},
            {name: '3', value: 1654},
            {name: '4', value: 1795}
          ],
          options: {
            title: '东财就餐流量统计'
          }

        },
        newList: [
          {
            name: '肖申克的救赎',
            url: 'https://movie.douban.com/subject/1292052/',
            time: '2017-07-11 18:21'
          },
          {
            name: '这个杀手不太冷',
            url: 'https://movie.douban.com/subject/1295644/',
            time: '2017-07-11 18:21'
          },
          {
            name: '霸王别姬',
            url: 'https://movie.douban.com/subject/1291546/',
            time: '2017-07-11 18:21'
          },
          {
            name: '阿甘正传',
            url: 'https://movie.douban.com/subject/1292720/',
            time: '2017-07-11 18:21'
          },
          {
            name: '美丽人生',
            url: 'https://movie.douban.com/subject/1292063/',
            time: '2017-07-11 18:21'
          },
          {
            name: '千与千寻',
            url: 'https://movie.douban.com/subject/1291561/',
            time: '2017-07-11 18:21'
          },
          {
            name: '辛德勒的名单',
            url: 'https://movie.douban.com/subject/1295124/',
            time: '2017-07-11 18:21'
          },
          {
            name: '海上钢琴师',
            url: 'https://movie.douban.com/subject/1292001/',
            time: '2017-07-11 18:21'
          },
          {
            name: '机器人总动员',
            url: 'https://movie.douban.com/subject/2131459/',
            time: '2017-07-11 18:21'
          },
          {
            name: '盗梦空间',
            url: 'https://movie.douban.com/subject/3541415/',
            time: '2017-07-11 18:21'
          }
        ]
      }
    },
    methods: {},
    mounted: function () {
    },
    components: {
      MainVue: MainVue,
      Schart: Schart
    }
  }
</script>
