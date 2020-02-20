<template >
<div class="wrapper">
  <div class="header">
    <text class="header-title">我的订单</text>
    <text class="header-right iconfont">&#xe6a3;</text>
  </div>
  <div class="list">
    <div class="list-item">
      <text class="item-icon iconfont">&#xe673;</text>
      <text class="item-name">待付款</text>
    </div>
    <div class="list-item">
      <text class="item-icon iconfont">&#xe675;</text>
      <text class="item-name">待发货</text>
    </div>
    <div class="list-item">
      <text class="item-icon iconfont">&#xe671;</text>
      <text class="item-name">已发货</text>
    </div>
    <div class="list-item">
      <text class="item-icon iconfont">&#xe672;</text>
      <text class="item-name">待评价</text>
    </div>
    <div class="list-item">
      <text class="item-icon iconfont">&#xe6ac;</text>
      <text class="item-name">退换/售后</text>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.iconfont {
    font-family: myico;
}

.wrapper {
    height: 226px;
    padding-left: 26px;
    background-color: #ffffff;
}

.header {
    height: 93px;
    padding-top: 34px;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
    flex-direction: row;
    flex-wrap: nowrap;
}

.header-title {
    flex: 1;
    font-size: 26px;
    color: #333333;
}

.header-right {
    margin-right: 30px;
    font-size: 26px;
    color: #333333;
}

.list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-right: 30px;
}

.list-item {
    width: 130px;
    height: 132px;
}

.item-icon {
    text-align: center;
    height: 79px;
    padding-top: 10px;
    padding-bottom: 15px;
    font-size: 50px;
    color: #666666;
}

.item-name {
    text-align: center;
    font-size: 26px;
    color: #666666;
}
</style>
