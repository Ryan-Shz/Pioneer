<template >
<div>
  <scroller class="menu">
    <div class="menu-item" v-for="(item,idx) in menus" :key="idx" @click="doClickEvent(item.cataId)">
      <text :class="['menu-title',cataId==item.cataId?'active':'']">{{item.title}}</text>
    </div>
  </scroller>
</div>
</template>

<script>
export default {
  model: {
    prop: 'cataId',
    event: 'change'
  },
  props: {
    cataId: String
  },
  data() {
    return {
      menus: [
        { 'title': '推荐专区', 'cataId': '1022001' },
        { 'title': '夏凉专区', 'cataId': '109224000' },
        { 'title': '爆品专区', 'cataId': '1087004' },
        { 'title': '新品专区', 'cataId': '109217021' },
        { 'title': '居家生活', 'cataId': '1005000' },
        { 'title': '服饰鞋包', 'cataId': '1010000' },
        { 'title': '美食酒水', 'cataId': '1005002' },
        { 'title': '个护清洁', 'cataId': '1013001' },
        { 'title': '母婴亲子', 'cataId': '1011000' },
        { 'title': '运动旅行', 'cataId': '109243029' },
        { 'title': '数码家电', 'cataId': '1043000' },
        { 'title': '全球特色', 'cataId': '1019001' },
        { 'title': '游戏达人', 'cataId': '1019002' },
        { 'title': '零食专区', 'cataId': '1019003' },
        { 'title': '果蔬专区', 'cataId': '1019004' }
      ]
    }
  },
  methods: {
    doClickEvent(cataId) {
      this.$emit('change', cataId);
    }
  },
  mounted() {
    this.$emit('change', this.menus[0].cataId);
  }
}
</script>

<style scoped>
.menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-bottom: 8px;
}

.menu-item {
    margin-top: 40px;
    height: 50px;
}

.menu-title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 28px;
}

.active {
    border-left-width: 8px;
    border-left-color: #FF4400;
    color: #FF4400;
}
</style>
