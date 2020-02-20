<template>
<div class="wrapper">
  <div class="header">
    <text class="header-search iconfont">&#xe754; 搜索商品，共8888款好物</text>
  </div>
  <div class="main">
    <category-nav class="nav" v-model="cataId"></category-nav>
    <category-item-page class="item-page" :cataId="cataId"></category-item-page>
  </div>
</div>
</template>

<script>
import CategoryItemPage from '@/components/CategoryItemPage';
import CategoryNav from '@/components/CategoryNav';
export default {
  components: {
    CategoryItemPage,
    CategoryNav
  },
  data() {
    return {
      cataId: '0'
    };
  }
};
</script>

<style scoped>
.iconfont {
  font-family: myico;
}

.wrapper {
  background-color: #ffffff;
}

.header {
  height: 90px;
  padding-left: 30px;
  padding-right: 30px;
  border-bottom-width: 2px;
  border-bottom-color: #ededed;
  flex-direction: row;
  align-items: center;
}

.header-search {
  flex: 1;
  height: 56px;
  line-height: 56px;
  text-align: center;
  border-radius: 10px;
  background-color: #ededed;
  font-size: 26px;
  color: #666666;
  opacity: 0.99;
}

.main {
  position: fixed;
  left: 0;
  right: 0;
  top: 90px;
  bottom: 90px;
  flex-direction: row;
  flex-wrap: nowrap;
}

.nav {
  width: 162px;
}

.item-page {
  flex: 1;
}
</style>
