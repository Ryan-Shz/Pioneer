<template>
<div>
  <div class="title-frame">
    <text class="title">{{title}}</text>
  </div>
  <list class="list" loadmoreoffset="500" @loadmore="onloading">
    <cell>
      <topic-nav></topic-nav>
    </cell>
    <cell class="cell-top" v-for="(item, index) in list" :key="index">
      <topic-item :article="item"></topic-item>
    </cell>
    <cell>
      <base-loading v-if="loading"></base-loading>
    </cell>
  </list>
</div>
</template>

<script>
import TopicNav from '@/components/TopicNav'
import TopicItem from '@/components/TopicItem'
import BaseLoading from '@/components/BaseLoading'
export default {
  components: {
    TopicNav,
    TopicItem,
    BaseLoading
  },
  data() {
    return {
      title: '专题',
      loading: false,
      list: [
        {
          avatar:
            'https://yanxuan.nosdn.127.net/15040896357740404.png?imageView&thumbnail=64y64',
          name: '居家组：朵朵',
          images: [
            'https://yanxuan.nosdn.127.net/15040927525260414.jpg',
            'https://yanxuan.nosdn.127.net/15040927586650416.jpg',
            'https://yanxuan.nosdn.127.net/15040927556820415.jpg'
          ],
          title: '初秋，最想用它来裸睡',
          desc:
            '连续下了几场雨，杭州的早晚，已透出几丝凉意。再睡席子便有点凉了，于是周末从柜子翻...'
        },
        {
          avatar:
            'http://yanxuan.nosdn.127.net/3d860cbf663253590da6a64ff07f9919.png?imageView&thumbnail=64y64',
          name: '严选推荐',
          images: [
            'http://yanxuan.nosdn.127.net/5a1df92d48fa3214bec9bb40ab067683.jpg'
          ],
          title: '年中扫一扫，下半年运势好',
          desc: '6个家庭清洁小技巧',
          price: '6.9元起'
        }
      ]
    }
  },
  methods: {
    onloading() {
      if (!this.loading) {
        this.loading = true
        setTimeout(() => {
          this.list = this.list.concat(this.list)
          this.loading = false
        }, 2000)
      }
    }
  }
}
</script>

<style scoped>
.title-frame {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 94px;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #d9d9d9;
  background-color: #fafafa;
}

.title {
  padding-top: 10px;
  font-size: 36px;
  line-height: 59px;
  text-align: center;
  color: #333333;
}

.list {
  position: fixed;
  top: 95px;
  left: 0;
  right: 0;
  bottom: 95px;
}

.loading {
  width: 750px;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
}
</style>
