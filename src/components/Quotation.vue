<template>
  <div class="app">
    <div class="header flex-box">
      <span><img src="../../static/img/back.png" alt=""></span>
      <span class="title">行情</span>
    </div>
    <div class="main">
      <el-tabs v-model="activeName">
        <div class="oper">
          <span class="huobi">货币/24h成交</span>
          <span class="huobi">最新价</span>
          <span class="huobi">涨跌幅</span>
        </div>
        <el-tab-pane label="BCH" name="first">
          <bch></bch>
        </el-tab-pane>
        <el-tab-pane label="HuobiPro" name="HuobiPro">
          <huobipro></huobipro>
        </el-tab-pane>
        <el-tab-pane label="币安" name="third">
          <bian></bian>
        </el-tab-pane>
        <el-tab-pane label="Okex" name="fourth">
          <okex></okex>
        </el-tab-pane>
        <el-tab-pane label="Upbit" name="upbit">
          <upbit></upbit>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import huobipro from '@/components/HuobiPro'
import bch from '@/components/Bch'
import bian from '@/components/BiAn'
import okex from '@/components/Okex'
import upbit from '@/components/Upbit'
export default {
  data() {
    return {
      activeName: 'HuobiPro'
    };
  },
  components:{
    huobipro,
    bch,
    bian,
    okex,
    upbit
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  position: fixed;
  background: #fff;
  z-index: 999999;
}
.header img {
  width: 20px;
  height: 15px;
  margin: 12px 0 0 15px;
}
.title {
  text-align: center;
  flex: 1;
  line-height: 40px;
  padding-right: 35px;
}
.main {
  padding-top: 40px;
}
.oper{
  display: flex;
  height: 42px;
  background: #f4f4f4;
  line-height: 42px;
  font-size: 13px;
}
.huobi{
  flex: 1;
  text-align: center;
}
.huobi img{
  width: 8px;
  height: 8px;
}

</style>
