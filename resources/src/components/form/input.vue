<template>
  <div>
    <header-vue></header-vue>
    <div class="web-size">
      <Row :gutter="20">
        <Col span="12">
        <div class="pannel">
          <p class="pannel-title">基础用法</p>
          <div class="pannel-box">
            <Input v-model="value" placeholder="请输入..." style="width: 300px"></Input>
          </div>
          <div class="pannel-note">
            基本用法，可以使用 v-model 实现数据的双向绑定。<br>
            可以直接设置 style 来改变输入框的宽度，默认 100%。
          </div>
        </div>
        </Col>
        <Col span="12">
        <div class="pannel">
          <p class="pannel-title">尺寸</p>
          <div class="pannel-box">
            <Input v-model="value1" size="large" placeholder="large size"></Input>
            <br>
            <br>
            <Input v-model="value2" placeholder="default size"></Input>
            <br>
            <br>
            <Input v-model="value3" size="small" placeholder="small size"></Input>
          </div>
          <div class="pannel-note">
            输入框有三种尺寸：大、默认（中）、小<br>
            通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。
          </div>
        </div>
        </Col>
        <Col span="12">
        <div class="pannel">
          <p class="pannel-title">带Icon的输入框</p>
          <div class="pannel-box">
            <Input v-model="value4" icon="ios-clock-outline" placeholder="请输入..." style="width: 300px"></Input>
          </div>
          <div class="pannel-note">
            通过 icon 属性可以在输入框右边加一个图标。<br>
            点击图标，会触发 on-click 事件。
          </div>
        </div>
        </Col>
        <Col span="12">
        <div class="pannel">
          <p class="pannel-title">文本域</p>
          <div class="pannel-box">
            <Input v-model="value5" type="textarea" placeholder="请输入..."></Input><br><br>
            <Input v-model="value6" type="textarea" :rows="4" placeholder="请输入..."></Input>
          </div>
          <div class="pannel-note">
            通过设置属性 type 为 textarea 来使用文本域，用于多行输入。<br>
            通过设置属性 rows 控制文本域默认显示的行数。
          </div>
        </div>
        </Col>
        <Col span="12">
        <div class="pannel">
          <p class="pannel-title">适应文本高度的文本域</p>
          <div class="pannel-box">
            <Input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></Input><br><br>
            <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
          </div>
          <div class="pannel-note">
            设置属性 autosize，文本域会自动适应高度的变化。<br>
            autosize也可以设定为一个对象，指定最小行数和最大行数。
          </div>
        </div>
        </Col>

        <Col span="12">
        <div class="pannel">
          <p class="pannel-title">禁用状态 </p>
          <div class="pannel-box">
            <Input v-model="value9" disabled placeholder="请输入..."></Input><br><br>
            <Input v-model="value10" disabled type="textarea" placeholder="请输入..."></Input>
          </div>
          <div class="pannel-note">
            通过添加disabled属性可设置为不可用状态。
          </div>
        </div>
        </Col>
        <Col span="24">
        <div class="pannel">
          <p class="pannel-title">复合型输入框 </p>
          <div class="pannel-box">
            <Input v-model="value11">
            <span slot="prepend">http://</span>
            <span slot="append">.com</span>
            </Input>
            <br>
            <Input v-model="value12">
            <Select v-model="select1" slot="prepend" style="width: 80px">
              <Option value="http">http://</Option>
              <Option value="https">https://</Option>
            </Select>
            <Select v-model="select2" slot="append" style="width: 70px">
              <Option value="com">.com</Option>
              <Option value="org">.org</Option>
              <Option value="io">.io</Option>
            </Select>
            </Input>
            <br>
            <Input v-model="value13">
            <Select v-model="select3" slot="prepend" style="width: 80px">
              <Option value="day">日活</Option>
              <Option value="month">月活</Option>
            </Select>
            <Button slot="append" icon="ios-search"></Button>
            </Input>
          </div>
          <div class="pannel-note">
            通过前置和后置的 slot 可以实现复合型的输入框。
          </div>
        </div>
        </Col>
        <Col span="24">
        <br/><br/>
        <h2>API _ Input props</h2>
        <br/>
        <Table border :columns="columnsProps" :data="dataProps"></Table>
        </Col>
      </Row>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>
</template>
<script>
  import HeaderVue from '../common/HeaderVue.vue'
  export default {
    data: function () {
      return {
        value: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        select1: 'http',
        select2: 'com',
        select3: 'day',
        columnsProps: [{}],
        dataProps: [{}]
      }
    },
    created: function () {
      var url = '/static/data/dataAPI/inputAPI.json'
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
