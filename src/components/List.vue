<template>
  <div class="app">
    <div class="header flex-box">
      <span><img src="../../static/img/back.png" alt=""></span>
      <span class="title">头条列表</span>
    </div>
    <div class="main">
      <div class="mainInfo flex1" v-for="item in arr" :key="item.id" @click="goInfo()">
      <div class="m-l">
        <span class="t">
          {{item.title}}
        </span>
        <p class="b">
          <span><img :src="item.fromImg" class="fromImg">{{item.fromInfo}}</span>
          <span class="time">{{item.time}}</span>
        </p>
      </div>
      <div class="m-r">
        <img src="../../static/img/pic_03.jpg" alt="">
      </div>
    </div>
    </div>
    
  </div>
</template>

<script scoped>
export default {
  name: "list",
  data() {
    return {
      arr: [
        {
          title: "区块链“兄弟连”背后：女性创客正成为焦点",
          fromImg: "../../static/img/pic_06.png",
          pic: "../../static/img/pic_03.jpg",
          fromInfo: "火币资讯",
          time: "2018.4.25"
        },
        {
          title: "区块链“兄弟连”背后：女性创客正成为焦点",
          fromImg: "../../static/img/pic_06.png",
          pic: "../../static/img/pic_03.jpg",
          fromInfo: "火币资讯",
          time: "2018.4.25"
        },
        {
          title: "区块链“兄弟连”背后：女性创客正成为焦点",
          fromImg: "../../static/img/pic_06.png",
          pic: "../../static/img/pic_03.jpg",
          fromInfo: "火币资讯",
          time: "2018.4.25"
        },
        {
          title: "区块链“兄弟连”背后：女性创客正成为焦点",
          fromImg: "../../static/img/pic_06.png",
          pic: "../../static/img/pic_03.jpg",
          fromInfo: "火币资讯",
          time: "2018.4.25"
        },
        {
          title: "区块链“兄弟连”背后：女性创客正成为焦点",
          fromImg: "../../static/img/pic_06.png",
          pic: "../../static/img/pic_03.jpg",
          fromInfo: "火币资讯",
          time: "2018.4.25"
        },
        {
          title: "区块链“兄弟连”背后：女性创客正成为焦点",
          fromImg: "../../static/img/pic_06.png",
          pic: "../../static/img/pic_03.jpg",
          fromInfo: "火币资讯",
          time: "2018.4.25"
        },
        {
          title: "区块链“兄弟连”背后：女性创客正成为焦点",
          fromImg: "../../static/img/pic_06.png",
          pic: "../../static/img/pic_03.jpg",
          fromInfo: "火币资讯",
          time: "2018.4.25"
        },
        {
          title: "区块链“兄弟连”背后：女性创客正成为焦点",
          fromImg: "../../static/img/pic_06.png",
          pic: "../../static/img/pic_03.jpg",
          fromInfo: "火币资讯",
          time: "2018.4.25"
        }
      ]
    };
  },
  methods:{
    goInfo(){
      this.$router.push({path:"/quotation"})
    }
  }
};
</script>

<style>
.header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f8f8f8;
  display: flex;
  position: fixed;
  background: #fff;
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
.main{
  padding-top: 40px;
}
.mainInfo {
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #f8f8f8;
}
.m-l {
  flex: 3.5;
  padding: 17px 0 0 14px;
}
.t {
  font-size: 14px;
}
.b {
  font-size: 12px;
  padding-top: 10px;
  color: #a6a6a6;
}
.m-r {
  flex: 2;
}
.m-r img {
  width: 110px;
  height: 80px;
  padding: 10px 0 0 10px;
}
.fromImg {
  width: 10px;
  height: 14px;
  vertical-align: middle;
  padding-right: 8px;
  padding-bottom: 3px;
}
.time {
  float: right;
  padding-right: 10px;
}
</style>
