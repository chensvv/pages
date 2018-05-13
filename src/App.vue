<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.flex-box{
    display: flex;
}
.flex-col{
    flex-direction: column;
}
.flex1{
  flex: 1;
}
body,html,.app{
  width: 100%;
  height: 100%;
}
.el-tabs__nav-wrap{
  padding-left: 13px;
}
.el-tabs__item.is-active{
  color: #000;
}
.el-tabs__active-bar{
  background-color: #fbde00;
}
.el-tabs__header{
  margin: 0;
}
</style>
