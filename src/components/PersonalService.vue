<template >
<div class="wrapper">
  <div class="header">
    <text class="header-title">我的服务</text>
  </div>
  <div :class="['service-list',g_idx!=services.length-1?'border':'']" v-for="(group,g_idx) in services" :key="g_idx">
    <div class="service-item" v-for="(item,idx) in group" :key="idx">
      <text :class="['item-icon','iconfont',item.color]">{{item.icon}}</text>
      <text class="item-name">{{item.name}}</text>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        [
          { 'name': '拼团订单', 'icon': '\ue619', 'color': 'i-c-orange' },
          { 'name': '邀请好友', 'icon': '\ue600', 'color': 'i-c-yellow' },
          { 'name': '优惠券', 'icon': '\ue609', 'color': 'i-c-orange' },
          { 'name': '优先购', 'icon': '\ue7fb', 'color': 'i-c-yellow' }
        ],
        [
          { 'name': '礼品卡', 'icon': '\ue660', 'color': 'i-c-orange' },
          { 'name': '会员', 'icon': '\ue701', 'color': 'i-c-yellow' },
          { 'name': '足迹', 'icon': '\ue602', 'color': 'i-c-orange' },
          { 'name': '收藏', 'icon': '\ue7f1', 'color': 'i-c-yellow' }
        ],
        [
          { 'name': '地址', 'icon': '\ue62c', 'color': 'i-c-blue' },
          { 'name': '客服', 'icon': '\ue62d', 'color': 'i-c-blue' },
          { 'name': '帮助', 'icon': '\ue6b5', 'color': 'i-c-blue' },
          { 'name': '设置', 'icon': '\ue68a', 'color': 'i-c-blue' }
        ]
      ]
    }
  }
}
</script>

<style scoped>
.iconfont {
    font-family: myico;
}

.wrapper {
    background-color: #FFFFFF;
    padding-left: 30px;
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

.service-list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 150px;
    padding-top: 20px;
    padding-right: 30px;
}

.border {
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;
}

.service-item {
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

.i-c-orange {
    color: #ff744d;
}

.i-c-yellow {
    color: #f6a121;
}

.i-c-blue {
    color: #689de5;
}
</style>
