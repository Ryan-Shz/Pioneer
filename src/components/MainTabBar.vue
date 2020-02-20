<template>
	<div class="wrapper">
		<div class="bar-item" @click="tabTo(tabArr[0].component)">
			<text :class="['bar-item-icon','icon-font', isActive(tabArr[0].component)]">&#xe6b8;</text>
			<text :class="['bar-item-txt', isActive(tabArr[0].component)]">{{tabArr[0].name}}</text>
		</div>
		<div class="bar-item" @click="tabTo(tabArr[1].component)">
			<text :class="['bar-item-icon','icon-font', isActive(tabArr[1].component)]">&#xe816;</text>
			<text :class="['bar-item-txt', isActive(tabArr[1].component)]">{{tabArr[1].name}}</text>
			<text class="notice-dot"></text>
		</div>
		<div class="bar-item" @click="tabTo(tabArr[2].component)">
			<text :class="['bar-item-icon','icon-font', isActive(tabArr[2].component)]">&#xe729;</text>
			<text :class="['bar-item-txt', isActive(tabArr[2].component)]">{{tabArr[2].name}}</text>
		</div>
		<div class="bar-item" @click="tabTo(tabArr[3].component)">
			<text :class="['bar-item-icon','icon-font', isActive(tabArr[3].component)]">&#xe6af;</text>
			<text :class="['bar-item-txt', isActive(tabArr[3].component)]">{{tabArr[3].name}}</text>
		</div>
		<div class="bar-item" @click="tabTo(tabArr[4].component)">
			<text :class="['bar-item-icon','icon-font', isActive(tabArr[4].component)]">&#xe7d6;</text>
			<text :class="['bar-item-txt', isActive(tabArr[4].component)]">{{tabArr[4].name}}</text>
			<text class="i-notice">2</text>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      selectedPageName: 'home',
      tabArr: [
        {
          name: '首页',
          component: 'home'
        },
        {
          name: '专题',
          component: 'topic'
        },
        {
          name: '分类',
          component: 'category'
        },
        {
          name: '购物车',
          component: 'shopping'
        },
        {
          name: '个人',
          component: 'personal'
        }
      ]
    }
  },
  computed: {
    page() {
      return this.$route.name
    }
  },
  methods: {
    tabTo(tabName) {
      if (tabName === this.selectedPageName) {
        return
      }
      this.selectedPageName = tabName
      this.$emit('tabTo', tabName)
    },
    isActive(tabName) {
      return this.selectedPageName === tabName ? 'active' : ''
    }
  }
}
</script>

<style scoped>
.icon-font {
  font-family: myico;
}

.wrapper {
  flex-direction: row;
  justify-content: space-between;
  width: 750px;
  height: 95px;
  border-top-width: 1px;
  border-top-color: hsl(0, 0%, 85%);
  padding-top: 8px;
}

.bar-item {
  flex: 1;
  justify-content: center;
  align-items: center;
}

.bar-item-txt {
  color: #666666;
  text-align: center;
  font-size: 22px;
  margin-top: 5px;
}

.bar-item-icon {
  color: #666666;
  text-align: center;
  font-size: 32px;
}

.bar-icon {
  font-size: 38px;
}

.bar-txt {
  font-size: 22px;
  padding-top: 5px;
}

.i-notice {
  /*位置与大小*/
  position: absolute;
  top: 6px;
  right: 30px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  /*文字内容*/
  color: #ffffff;
  font-size: 26px;
  text-align: center;
  line-height: 30px;
  /*背景颜色*/
  background-color: #ff0000;
}

.notice-dot {
  position: absolute;
  top: 8px;
  right: 40px;
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background-color: #ff0000;
}

.active {
  color: #ff0000;
}
</style>
