<template>
<div class="wrapper">
  <div class="header">
    <text class="header-txt">购物车</text>
    <text class="header-right">领券</text>
  </div>
  <div class="service">
    <div class="service-frame">
      <div class="dot"></div>
      <text class="service-txt">30天无忧退货</text>
    </div>
    <div class="service-frame">
      <div class="dot"></div>
      <text class="service-txt">48小时快速退款</text>
    </div>
    <div class="service-frame">
      <div class="dot"></div>
      <text class="service-txt">满88元免邮费</text>
    </div>
  </div>
  <shopping-list class="cart"></shopping-list>
</div>
</template>

<script>
import ShoppingList from '@/components/ShoppingList';
export default {
  components: {
    ShoppingList
  }
};
</script>

<style scoped>
.header {
  height: 88px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #ffffff;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.header-txt {
  flex: 1;
  font-size: 36px;
  color: #333333;
}

.header-right {
  margin-right: 0;
  font-size: 30px;
  color: #ff4400;
}

.service {
  height: 70px;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.service-frame {
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border-width: 0.5px;
  border-color: #666666;
  margin-right: 5px;
  /* box-shadow: inset 0.5px 0.5px 0.5px #666666,inset -0.5px -0.5px 0.5px #666666; */
  opacity: 0.5;
}

.service-txt {
  font-size: 24px;
  color: #666666;
}

.cart {
  position: fixed;
  left: 0;
  right: 0;
  top: 158px;
  bottom: 90px;
}
</style>
