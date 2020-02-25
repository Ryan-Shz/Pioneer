<template>
<div>
  <home-header class="main-header"></home-header>
  <scroller class="main-list" loadmoreoffset='300' offset-accuracy='300'>
    <div class="cell-btn">
      <home-image-slider></home-image-slider>
      <div class="slogen">
        <text class="i-slg iconfont">&#xe657; 网易自营品牌</text>
        <text class="i-slg iconfont">&#xe657; 30天无忧退货</text>
        <text class="i-slg iconfont">&#xe657; 48小时快速退款</text>
      </div>
    </div>
    <home-list-item1 class="cell-btn"></home-list-item1>
    <home-list-item2 class="cell-btn"></home-list-item2>
    <home-list-item3 class="cell-btn"></home-list-item3>
  </scroller>
  <home-nav class="main-nav"></home-nav>
  <text class="vuex-test-btn" @click="increase">Vuex测试</text>
  <text class="navigator-test-btn" @click="goto">Navigator测试</text>
</div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import HomeNav from '@/components/HomeNav'
import HomeImageSlider from '@/components/HomeImageSlider'
import HomeListItem1 from '@/components/HomeListItem1'
import HomeListItem2 from '@/components/HomeListItem2'
import HomeListItem3 from '@/components/HomeListItem3'
// 导入navigator模块
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')
import store from '@/store'
export default {
  components: {
    HomeHeader,
    HomeNav,
    HomeImageSlider,
    HomeListItem1,
    HomeListItem2,
    HomeListItem3
  },
  data() {
    return {
      isShowNav: false
    }
  }, 
  methods: {
    increase() {
      // 提交vuex状态，调用actions中的方法
      store.dispatch('increase', true);
    },
    goto(){
      navigator.push({
        url: 'http://g.tbcdn.cn/amte-fe/amte-resource/0.0.8/fast/show_2.js',
        animated: 'true'
      }, event => {
        modal.toast({
          message: 'open a new weex page.',
          duration: 3
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
/* 导入scss文件，就可以使用其中声明的变量 */
@import '../assets/css/dimens.scss';
.vuex-test-btn {
  position: fixed;
  width: $testBtnWidth;
  height: 100px;
  top: 200px;
  background-color: red;
  color: white;
  text-align: center;
  line-height: 100px;
}
.navigator-test-btn {
  position: fixed;
  width: $testBtnWidth;
  height: 100px;
  top: 310px;
  background-color: red;
  color: white;
  text-align: center;
  line-height: 100px;
}
.iconfont {
  font-family: myico;
}
.mian-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.main-list {
  position: fixed;
  top: 159px;
  bottom: 90px;
  left: 0;
  right: 0;
}
.main-nav {
  margin-top: 10px;
}
.cell-btn {
  padding-bottom: 15px;
  /* margin-bottom: 20px; */
}
.slogen {
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}
.i-slg {
  flex: 1;
  height: 64px;
  padding-top: 16px;
  font-size: 24px;
  color: #ff0000;
  text-align: center;
}
</style>
