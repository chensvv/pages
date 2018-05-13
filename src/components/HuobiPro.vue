<template>
  <div class="app">
      <div class="list" v-for="item in arr" :key="item.id">
          <div class="ll">
              <img src="../../static/img/oc_03.png" alt="">
          </div>
          <div class="lr">
              <span class="name">
                  <p>{{item.name}}</p>
                  <P class="money">{{item.money}}</P>
              </span>
              <span class="price">
                  <p>￥{{item.price}}</p>
                  <p class="money">${{item.money}}</p>
              </span>
              <span class="data">
                  <div class="dataB">{{item.data}}</div>
              </span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[
                {
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },{
                    icon:"../../static/img/oc_03.png",name:"EOS-USDT",money:"1105.56万",price:"114",data:"+5.35%"
                },
            ]
        }
    }
}
</script>

<style>
.list{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #f8f8f8;
    display: flex;
}
.ll{
    flex: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
}
.lr{
    flex: 8;
    display: flex;
    padding-top: 13px;
}
.name{
    flex: 1;
}
.money{
    font-size: 12px;
    color: #868686;
    padding-top: 3px;
}
.price{
    flex: 1;
}
.data{
    flex: 1;
    display: flex;
    justify-content: center;
}
.dataB{
    width: 70px;
    height: 30px;
    background: #03c087;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 13px;
    border-radius: 2px;
}
</style>
