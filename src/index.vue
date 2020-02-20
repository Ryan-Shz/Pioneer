<template>
<div class="box">
  <router-view />
  <main-tab-bar class="tab-bar" @tabTo="tabTo" />
</div>
</template>
<script>
import MainTabBar from './components/MainTabBar';
const module = weex.requireModule('dom');
export default {
  name: 'App',
  components: {
    MainTabBar
  },
  methods: {
    tabTo(tabName) {
      this.$router.push(tabName);
    }
  },
  beforeCreate() {
    module.addRule('fontFace', {
      fontFamily: 'myico',
      src: "url('https://at.alicdn.com/t/font_1266237_lhiv1ounase.ttf')"
    });
  }
};
</script>
<style scoped>
.box {
  background-color: #f4f4f4;
}
.tab-bar {
  position: fixed;
  bottom: 0;
  background-color: #fafafa;
}
</style>
