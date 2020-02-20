<template>
<div class="wrapper">
  <div class="header-frame">
    <image class="avatar" resize="cover" :src="article.avatar"></image>
    <text class="name">{{article.name}}</text>
  </div>
  <div class="banner-frame">
    <image class="banner-left" resize="cover" :src="article.images[0]"></image>
    <div class="banner-right" v-if="article.images.length>1">
      <image class="banner-top" resize="cover" :src="article.images[1]"></image>
      <image class="banner-bottom" resize="cover" :src="article.images[2]"></image>
    </div>
  </div>
  <div class="title-frame">
    <text class="title">{{article.title}}</text>
    <text class="price">{{article.price}}</text>
  </div>
  <text class="desc">{{article.desc}}</text>
</div>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>

<style scoped>
.wrapper {
  background-color: white;
  padding-bottom: 10px;
  margin-top: 15px;
}

.header-frame {
  height: 85px;
  padding-left: 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.avatar {
  width: 58px;
  height: 58px;
  border-radius: 25px;
}

.name {
  padding-left: 20px;
  font-size: 26px;
}

.banner-frame {
  height: 380px;
  flex-direction: row;
  flex-wrap: nowrap;
}

.banner-left {
  flex: 1;
  height: 380px;
  width: '';
}

.banner-right {
  width: 190px;
  height: 380px;
}

.banner-top,
.banner-bottom {
  width: 190px;
  height: 188px;
  margin-left: 3px;
  margin-bottom: 3px;
}

.title-frame {
  height: 80px;
  padding: 20px;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

.title {
  flex: 1;
  font-size: 34px;
}

.price {
  font-size: 32px;
  color: #ff4400;
  margin-right: 0;
}

.desc {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 24px;
  color: #666666;
}
</style>
