<template>
<div class="wrapper">
  <div class="header">
    <text class="title">品牌制造商直供</text>
    <text class="more iconfont">更多&#xe6a3;</text>
  </div>
  <div class="items">
    <div class="item-frame">
      <image class="bkg" resize="cover" src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1"></image>
      <text class="item-title">海外制造商</text>
      <div class="item-desc">
        <text class="desc">9.9元起</text>
        <text class="tag">上新</text>
      </div>
    </div>
    <div class="item-frame">
      <image class="bkg" resize="cover" src="http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1"></image>
      <text class="item-title">CK制造商</text>
      <div class="item-desc">
        <text class="desc">29.9元起</text>
        <!-- <text class="tag"></text> -->
      </div>
    </div>
    <div class="item-frame">
      <image class="bkg" resize="cover" src="http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1"></image>
      <text class="item-title">新秀丽制造商</text>
      <div class="item-desc">
        <text class="desc">169元起</text>
        <!-- <text class="tag"></text> -->
      </div>
    </div>
    <div class="item-frame">
      <image class="bkg" resize="cover" src="http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1"></image>
      <text class="item-title">Nine West制造商</text>
      <div class="item-desc">
        <text class="desc">269元起</text>
        <!-- <text class="tag"></text> -->
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.iconfont {
    font-family: myico;
}

.bkg {
    width: '';
    height: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.wrapper {
    background-color: #ffffff;
}

.header {
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
}

.title,
.more {
    height: 100px;
    line-height: 100px;
    font-size: 32px;
    color: #333333;
}

.more {
    font-size: 28px;
    margin-right: 0;
}

.header,
.items {
    padding-left: 30px;
    padding-right: 30px;
}

.items {
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}

.item-frame {
    width: 343px;
    height: 260px;
    align-items: center;
    padding-top: 23px;
    margin-bottom: 4px;
    background-size: contain;
    background-repeat: no-repeat;
}

.item-title {
    text-align: center;
    font-size: 28px;
    height: 33px;
    line-height: 33px;
    color: #333333;
}

.item-desc {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 36px;
}

.desc {
    font-size: 24px;
    color: #7F7F7F;
    line-height: 36px;
    height: 36px;
}

.tag {
    height: 32px;
    line-height: 32px;
    font-size: 24px;
    color: #ffffff;
    background-color: #cbb693;
    border-radius: 5px;
    margin-left: 5px;
    padding-left: 5px;
    padding-right: 5px;
}
</style>
