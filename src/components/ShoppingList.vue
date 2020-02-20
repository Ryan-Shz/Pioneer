<template>
<div class="wrapper">
  <scroller class="cart-list" v-if="list.length>0">
  </scroller>
  <div class="cart-empty" v-else>
    <image class="empty-img" resize="contain" src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"></image>
    <text class="empty-txt">去添加点什么吧</text>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  }
}
</script>

<style scoped>
.wrapper {
  align-items: center;
  justify-content: center;
}

.cart-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
}

.cart-empty {
  height: 500px;
  align-items: center;
}

.empty-img {
  width: 248px;
  height: 248px;
  margin-bottom: 8px;
}

.empty-txt {
  color: #7f7f7f;
  font-size: 27px;
}
</style>
