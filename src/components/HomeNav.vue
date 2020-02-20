<template >
<div class="wrapper" :style="{'height':showFixNav?'290px':''}">
  <scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false">
    <div class="scroll-line" ref="scrollLine" :style="{'transform':`translateX(${scrollLine.left}px)`,'width':`${scrollLine.width}px`}"></div>
    <text v-for="(item,idx) in columns" ref="columns" :key="item.id" :class="['i-c', item.id === chooseId?'c-act':'']" @click="chooseItem(item.id,idx)">{{item.title}}</text>
    <text class="i-c"></text>
  </scroller>
  <div class="fix-nav" v-if="showFixNav">
    <text class="fix-nav-title">{{allChannelText}}</text>
    <text v-for="(item,idx) in columns" :key="item.id" :class="['f-c', item.id === chooseId?'f-act':'']" @click="chooseItem(item.id,idx)">{{item.title}}</text>
  </div>
  <text class="more iconfont" @click="showFixNav = !showFixNav">{{showFixNav?'&#xe6de;':'&#xe661;'}}</text>
</div>
</template>

<script>
const dom = weex.requireModule('dom')
export default {
  data() {
    return {
      allChannelText: '全部频道',
      chooseId: 1,
      showFixNav: false,
      scrollLine: {
        left: 30,
        width: 82
      },
      columns: [
        { id: 1, title: '推荐' },
        { id: 2, title: '限购品' },
        { id: 3, title: '新品' },
        { id: 4, title: '居家' },
        { id: 5, title: '餐饮' },
        { id: 6, title: '运动' },
        { id: 7, title: '数码' },
        { id: 8, title: '服装' }
      ]
    }
  },
  methods: {
    chooseItem(itemId, idx) {
      this.showFixNav = false
      this.chooseId = itemId
      this.scrollLineTo(idx)
      dom.scrollToElement(this.$refs.columns[idx], { offset: -100 })
    },
    scrollLineTo(idx) {
      let left = 0
      for (let i = 0; i < idx; i++) {
        dom.getComponentRect(this.$refs.columns[i], data => {
          left += Number(data.size.width)
        })
      }
      dom.getComponentRect(this.$refs.columns[idx], data => {
        this.scrollLine.left = left + 15
        this.scrollLine.width = data.size.width - 30
      })
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-family: myico;
}

.wrapper {
  background-color: #fafafa;
  border-bottom-width: 1px;
  border-bottom-color: #dadada;
}

.scroller {
  height: 54px;
  flex-direction: row;
  justify-content: space-between;
}

.i-c {
  padding-top: 10px;
  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 6px;
  font-size: 26px;
  color: #333333;
}

.c-act {
  color: #b4282d;
}

.more {
  position: absolute;
  top: 0;
  right: 0;
  height: 52px;
  width: 100px;
  padding-top: 10px;
  text-align: center;
  background-color: #fafafa;
  opacity: 0.96;
  box-shadow: -6px -4px 4px #fafafa;
  transition-property: transform;
  transition-duration: 300ms;
}

.scroll-line {
  position: absolute;
  bottom: 0;
  height: 4px;
  background-color: #ff4400;
  transition-property: transform, width;
  transition-duration: 300ms;
}

.fix-nav {
  position: absolute;
  height: 290px;
  left: 0;
  right: 0;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fafafa;
  border-bottom-width: 1px;
  border-bottom-color: #dadada;
}

.f-c {
  width: 210px;
  height: 52px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #dddddd;
  text-align: center;
  font-size: 26px;
  padding-top: 8px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  color: #333333;
}

.f-act {
  border-color: #ff4400;
  color: #ff4400;
  box-shadow: 0px -4px 4px #fafafa;
}

.fix-nav-title {
  width: 750px;
  height: 54px;
  line-height: 54px;
  padding-left: 20px;
  font-size: 26px;
  color: #333333;
}
</style>
