<template>
<div class="wrapper">
  <div class="user-wrapper">
    <image class="avatar" resize="cover" :src="user.icon"></image>
    <div class="user-title">
      <text class="user-name">{{user.name}}</text>
      <div class="title">
        <image class="title-icon" resize="cover" src="http://yanxuan.nosdn.127.net/3dc6e876620bb84a5dac3deb6ecd4916.png"></image>
        <text class="title-icon iconfont vip-icon">&#xe6c6;</text>
        <text class="title-txt vip-txt"></text>
      </div>
    </div>
  </div>
  <text class="qrcode iconfont">&#xe6b0;</text>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Ryan',
        icon: 'https://avatars3.githubusercontent.com/u/12422273?s=460&v=4'
      }
    }
  }
}
</script>

<style scoped>
.iconfont {
    font-family: myico;
}

.vip-icon {
    background-color: #b29e75;
    color: #ffffff;
}

.vip-txt {
    color: #b29e75;
}

.wrapper {
    background-color: #000000;
    height: 380px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 60px;
    justify-content: flex-end;
    overflow: hidden;
}

.user-wrapper {
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
}

.avatar {
    width: 130px;
    height: 130px;
    border-radius: 65px;
}

.user-title {
    flex: 1;
    margin-left: 30px;
    height: 100px;
    justify-content: space-between;
}

.user-name {
    color: #FFFFFF;
    line-height: 38px;
    font-size: 38px;
}

.title {
    flex-direction: row;
    flex-wrap: nowrap;
}

.title-icon {
    width: 32px;
    height: 32px;
    font-size: 32px;
    margin-right: 6px;
    border-radius: 4px;
}

.title-txt {
    font-size: 28px;
}

.qrcode {
    position: absolute;
    right: 80px;
    bottom: 120px;
    width: 80px;
    height: 80px;
    margin-right: -40px;
    margin-bottom: -40px;
    background-color: #666666;
    font-size: 45px;
    line-height: 80px;
    border-radius: 70px;
    text-align: center;
    color: #FFFFFF;
}
</style>
