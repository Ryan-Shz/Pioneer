<template >
<div class="wrapper">
  <div class="banner">
    <image class="banner-img" src="http://yanxuan.nosdn.127.net/d2579b43938c13a2c1278cd51c8b1afd.jpg?imageView&thumbnail=0x196&quality=75"></image>
  </div>
  <div class="items">
    <div class="item-frame" v-for="(item,idx) in items" :key="idx">
      <image class="item-img" resize="cover" :src="item.img"></image>
      <text class="item-name">{{item.name}}</text>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { 'name': '清爽美食', 'img': 'http://yanxuan.nosdn.127.net/300904c5241a26db6bcce5d9f76551cc.jpg?imageView&quality=85&thumbnail=144x144' },
        { 'name': '降温好物', 'img': 'http://yanxuan.nosdn.127.net/d3ea716b5221a2cb12262d2be266f750.png?imageView&quality=85&thumbnail=144x144' },
        { 'name': '烈日防晒', 'img': 'http://yanxuan.nosdn.127.net/0955bacbb512b7be7fac01cd25e2d5fb.png?imageView&quality=85&thumbnail=144x144' },
        { 'name': '夏季养生', 'img': 'http://yanxuan.nosdn.127.net/f1b98c9f371cee2860ce8d2f1e11941c.png?imageView&quality=85&thumbnail=144x144' },
        { 'name': '防蚊驱虫', 'img': 'http://yanxuan.nosdn.127.net/6466f8085f3e2e06011a8e3f709849d3.png?imageView&quality=85&thumbnail=144x144' },
        { 'name': '夏凉床品', 'img': 'http://yanxuan.nosdn.127.net/a763b3c77bc79abaa82c8f716fdd47f0.png?imageView&quality=85&thumbnail=144x144' },
        { 'name': '清凉洗护', 'img': 'http://yanxuan.nosdn.127.net/3be1e5f43842190000c9521e3ed741d0.png?imageView&quality=85&thumbnail=144x144' },
        { 'name': '夏日穿搭', 'img': 'http://yanxuan.nosdn.127.net/e0df2c529af0fa46524938d9d6458363.png?imageView&quality=85&thumbnail=144x144' },
        { 'name': '室内运动好物', 'img': 'http://yanxuan.nosdn.127.net/3738e85c2fb0c009c917a5b378661d36.png?imageView&quality=85&thumbnail=144x144' }
      ]
    }
  }
}
</script>

<style scoped>
.wrapper {
    padding: 30px;
    padding-bottom: 20px;
}

.banner {
    margin-bottom: 32px;
}

.banner-img {
    height: 192px;
    margin-left: 0;
    margin-right: 0;
    width: '';
    height: '';
}

.items {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}

.item-img {
    width: 144px;
    height: 144px;
    border-radius: 72px;
}

.item-name {
    width: 144px;
    height: 72px;
    text-align: center;
    font-size: 24px;
}
</style>
