<template>
<scroller class="scroller" scroll-direction="horizontal" show-scrollbar="false">
  <div class="topic-item" v-for="(item,idx) in topics" :key="idx">
    <image class="topic-bkg bkg" resize="cover" :src="item.img"></image>
    <text class="title">{{item.title}}</text>
  </div>
</scroller>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        { title: '严选look', img: 'https://yanxuan.nosdn.127.net/15030393722652401.jpg' },
        { title: '严选推荐', img: 'https://yanxuan.nosdn.127.net/d943675462a06f817d33062d4eb059f5.jpg' },
        { title: '丁磊私物推荐', img: 'https://yanxuan.nosdn.127.net/1de4da49367dd7c01af1f7a2b23b0237.jpg' },
        { title: '挑款师推荐', img: 'http://yanxuan.nosdn.127.net/437cc656ff529f8f84db6efc48df9bf4.png' }
      ]
    }
  }
}
</script>

<style scoped>
.bkg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.scroller {
    background-color: #ffffff;
    height: 200px;
    padding: 20px;
    flex-direction: row;
    flex-wrap: nowrap;
}

.topic-item {
    width: 275px;
    height: 150px;
    margin: 10px;

}

.topic-bkg {
    border-radius: 10px;
}

.title {
    line-height: 150px;
    font-size: 28px;
    color: #ffffff;
    text-align: center;
}
</style>
