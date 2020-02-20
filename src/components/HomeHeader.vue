<template>
<div class="wrapper">
  <div class="header-scanner">
    <text class="icon iconfont">&#xe7e1;</text>
    <text class="txt">{{scanText}}</text>
  </div>
  <text class="header-search iconfont">&#xe754; {{searchBoxHint}}</text>
  <div class="header-msg">
    <text class="icon iconfont">&#xe70a;</text>
    <text class="txt">{{messageText}}</text>
  </div>
</div>
</template>

<script>
import SearchForm from './BaseSearchForm';
export default {
  data() {
    return {
      scanText: '扫一扫',
      searchBoxHint: '搜索商品，共8888款好物',
      messageText: '消息'
    };
  },
  components: {
    SearchForm
  }
};
</script>

<style scoped>
.iconfont {
  font-family: myico;
}

.wrapper {
  height: 94px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fafafa;
  align-items: center;
  opacity: 0.99;
}

.header-scanner,
.header-msg {
  height: 80px;
  width: 96px;
  justify-content: center;
}

.icon,
.txt,
.header-search {
  color: #9c9c9c;
  font-weight: 300;
  text-align: center;
}

.icon {
  font-size: 32px;
}

.txt {
  font-size: 18px;
}

.header-search {
  flex: 1;
  height: 60px;
  font-size: 26px;
  border-radius: 8px;
  line-height: 60px;
  background-color: #ededed;
}
</style>
