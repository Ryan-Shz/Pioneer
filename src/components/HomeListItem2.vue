<template>
<div class="wrapper">
  <div class="title-wrapper">
    <div class="title-line"></div>
    <text class="title">新人专享礼</text>
    <div class="title-line"></div>
  </div>
  <div class="items">
    <div class="main-frame">
      <text class="main-title">新人专享礼包</text>
      <image class="main-pic" resize="contain" src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"></image>
    </div>
    <div>
      <div class="item-frame top">
        <div class="txt-frame">
          <text class="item-title">福利社</text>
          <text class="item-desc">今日特价</text>
          <!-- <text class="item-tag"></text> -->
        </div>
        <image class="item-pic" resize="contain" src="http://yanxuan.nosdn.127.net/13de83a532212f8f7e7723ac666bf191.png?imageView&thumbnail=200x200&quality=75"></image>
        <div class="discount">
          <text class="line1">¥9.9</text>
          <text class="line2">¥19</text>
        </div>
      </div>
      <div class="item-frame bottom">
        <div class="txt-frame">
          <text class="item-title">新人拼团</text>
          <text class="item-desc"></text>
          <text class="item-tag">1元起包邮</text>
        </div>
        <image class="item-pic" resize="contain" src="http://yanxuan.nosdn.127.net/27e82b28bf11797b6c4a10b67d221867.png?imageView&thumbnail=200x200&quality=75"></image>
        <div class="discount">
          <text class="line1">¥9.9</text>
          <text class="line2">¥19</text>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
    background-color: #ffffff;
}

.title-wrapper {
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    font-size: 32px;
    padding-left: 40px;
    padding-right: 40px;
}

.title-line {
    height: 3px;
    width: 24px;
    background-color: #333333;
}

.items {
    flex-direction: row;
    align-items: flex-start;
    margin-left: 30px;
    margin-right: 30px;
}

.main-frame {
    margin-right: 4px;
    width: 343px;
    height: 434px;
    border-radius: 4px;
    background-color: #F9E9CF;
}

.main-title {
    font-size: 32px;
    padding-top: 30px;
    padding-left: 30px;
}

.main-pic {
    width: 258px;
    height: 258px;
    margin-top: 57px;
    margin-left: 42px;
    margin-right: 42px;
}

.item-frame {
    width: 343px;
    height: 215px;
    margin-bottom: 4px;
    border-radius: 4px;
    flex-direction: row;
    justify-content: space-between;
}

.txt-frame {
    align-self: flex-start;
    padding-top: 20px;
    padding-left: 30px;
}

.item-title {
    font-size: 32px;
}

.item-desc {
    font-size: 18px;
    color: #7F7F7F;
}

.item-tag {
    align-self: flex-start;
    font-size: 16px;
    border-radius: 5px;
    height: 32px;
    line-height: 32px;
    padding-left: 10px;
    padding-right: 10px;
    color: #ffffff;
    background-color: #CBB693;
    text-align: center;
}

.item-pic {
    align-self: flex-end;
    width: 200px;
    height: 200px;
}

.top{
  background-color: #FBE2D3;
}

.bottom{
  background-color: #FFECC2;
}

.discount{
  position: absolute;
  top: 10px;
  right: 30px;
  width: 80px;
  height: 80px;
  background-color: #F59524;
  border-radius: 40px;
  opacity: .8;
  padding-top: 10px;
}

.line1,.line2{
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
}

.line2{
  font-size: 20px;
  line-height: 25px;
  text-decoration: line-through;
}
</style>
