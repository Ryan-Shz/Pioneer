<template>
<div class="wrapper">
  <image class="wrapper-bkg bkg" resize="cover" :src="info.bkg" autoBitmapRecycle=false></image>
  <div class="banner">
    <image class="bkg" resize="cover" :src="info.banner.bkg" autoBitmapRecycle=false></image>
    <div class="banner-items">
      <slider class="slider" auto-play="true">
        <a class="frame" :href="item.href" v-for="(item,idx) in info.banner.items" :key="idx">
          <image class="banner-img" :src="item.img" resize="contain" autoBitmapRecycle=false></image>
          <div class="banner-txt">
            <text class="banner-money">{{item.money}}</text>
            <text class="banner-omoney">{{item.omoney}}</text>
          </div>
        </a>
      </slider>
    </div>
  </div>
  <div class="main-items">
    <div class="main-frame" v-for="(item,idx) in info.main.items" :key="idx">
      <image class="bkg" resize="cover" :src="info.main.bkg"></image>
      <div class="main-txt">
        <text class="main-title">{{item.title}}</text>
        <text class="main-desc">{{item.desc}}</text>
      </div>
      <image class="main-img" resize="contain" :src="item.img"></image>
    </div>
  </div>
  <div class="title">
    <image class="title-img" resize="contain" :src="info.title_img"></image>
  </div>
  <div class="list-items">
    <div class="list-group" v-for="(group,gidx) in info.list.groups" :key="gidx">
      <div class="list-frame" v-for="(item,idx) in info.list.groups[gidx]" :key="idx">
        <image class="bkg" resize="cover" :src="info.list.bkg"></image>
        <div class="list-txt">
          <text class="list-title">{{item.title}}</text>
          <text class="list-desc">{{item.desc}}</text>
        </div>
        <image class="list-img" resize="contain" :src="item.img"></image>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        bkg:
          'https://yanxuan.nosdn.127.net/fe5a4fe84fd7f58c588927cf54181981.jpg',
        title_img:
          'https://yanxuan.nosdn.127.net/2faa4315a4b09d7e8da6a8f451adf4b4.jpg?imageView&thumbnail=750x0&quality=75',
        banner: {
          bkg:
            'https://yanxuan.nosdn.127.net/1f898fc569dc58a8b9a589a16ca83d20.gif',
          items: [
            {
              id: 1,
              href: '#',
              img:
                'http://yanxuan.nosdn.127.net/7cd9f22c8ca9515d8e8e0861f57f19e9.png',
              money: '¥69',
              omoney: '¥78'
            },
            {
              id: 2,
              href: '#',
              img:
                'http://yanxuan.nosdn.127.net/b1f7d3096d12d0e4f9e0bbc7232e9295.png',
              money: '¥120',
              omoney: '¥180'
            },
            {
              id: 3,
              href: '#',
              img:
                'http://yanxuan.nosdn.127.net/9d581d4ec02cf86ff2a05cf81868f159.png',
              money: '¥88',
              omoney: '¥98'
            },
            {
              id: 4,
              href: '#',
              img:
                'http://yanxuan.nosdn.127.net/d2f5072ded8d01e65997638cff806277.png',
              money: '¥168',
              omoney: '¥258'
            },
            {
              id: 5,
              href: '#',
              img:
                'http://yanxuan.nosdn.127.net/37721979dfc82a0a2648f3b5b46e2161.png',
              money: '¥288',
              omoney: '¥328'
            }
          ]
        },
        main: {
          bkg:
            'https://yanxuan.nosdn.127.net/ea460e6a4a55a84a3527c3ea675f2d9f.png?imageView&thumbnail=250x0&quality=75',
          items: [
            {
              id: 1,
              href: '#',
              img:
                'http://yanxuan.nosdn.127.net/84f4cda372dfd703fe0eeb287fb185f4.png?imageView&thumbnail=160x160&quality=75',
              title: '特价返场',
              desc: '最高降1400'
            },
            {
              id: 2,
              href: '#',
              img:
                'http://yanxuan.nosdn.127.net/384c689de50380bbd5094d3c51e9a688.png?imageView&thumbnail=160x160&quality=75',
              title: '618爆卖榜',
              desc: '抢疯单品4折起'
            },
            {
              id: 3,
              href: '#',
              img:
                'http://yanxuan.nosdn.127.net/9b17bde0818b456f208257089ce9ed73.png?imageView&thumbnail=160x160&quality=75',
              title: '飙升新品榜',
              desc: '最in新品盘点'
            }
          ]
        },
        list: {
          bkg:
            'https://yanxuan.nosdn.127.net/01c1103b24aa5349f5cf3342b02da313.png?imageView&thumbnail=188x0&quality=75',
          groups: [
            [
              {
                id: 1,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/4ae99cd4d76993ba384200c1c8d1b8db.png?imageView&thumbnail=160x160&quality=75',
                title: '净爽洗护',
                desc: '网红爆款6折起'
              },
              {
                id: 2,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/bf3ec70b254348196e78259818a48cfc.png?imageView&thumbnail=160x160&quality=75',
                title: '夏凉服装',
                desc: '狂欢同价4折起'
              },
              {
                id: 3,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/37f106da4d23985d3c251f3ba40f9d7e.png?imageView&thumbnail=160x160&quality=75',
                title: '鞋包配饰',
                desc: '家居拖9.9元起'
              },
              {
                id: 4,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/47a8bf28e3e56b96a111546704074ed6.png?imageView&thumbnail=160x160&quality=75',
                title: '当季美食',
                desc: '美味低至3.9元'
              }
            ],
            [
              {
                id: 5,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/4ae99cd4d76993ba384200c1c8d1b8db.png?imageView&thumbnail=160x160&quality=75',
                title: '数码家电',
                desc: '风扇限时7.7折'
              },
              {
                id: 6,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/77f711f2feeb8f24e2272400d372f41e.png?imageView&thumbnail=160x160&quality=75',
                title: '精致餐厨',
                desc: '夏日新品49元起'
              },
              {
                id: 7,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/a7f3ad90d19c4e06c78f10b4202e5853.png?imageView&thumbnail=160x160&quality=75',
                title: '品质进口',
                desc: '最高满199减100'
              },
              {
                id: 8,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/cd7a612c192a37bab964b41fbc83c4e6.png?imageView&thumbnail=160x160&quality=75',
                title: '缤纷周边',
                desc: '官方正版5折起'
              }
            ],
            [
              {
                id: 9,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/c442593e0cf25a42d37941554b587418.png?imageView&thumbnail=160x160&quality=75',
                title: '运动户外',
                desc: '运动T恤仅29元'
              },
              {
                id: 10,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/4478ac57bf289b162e8f1837ba3355f7.png?imageView&thumbnail=160x160&quality=75',
                title: '春风情趣',
                desc: '特惠5折起'
              },
              {
                id: 11,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?imageView&thumbnail=160x160&quality=75',
                title: '婴童孕产',
                desc: '放心购5折起'
              },
              {
                id: 12,
                href: '#',
                img:
                  'http://yanxuan.nosdn.127.net/146230f1e1c389fb309b38183d73d475.png?imageView&thumbnail=160x160&quality=75',
                title: '居家焕新',
                desc: '冰丝席159元起'
              }
            ]
          ]
        }
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  background-size: contain;
}

.bkg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: '';
  height: '';
}

.banner {
  height: 280px;
}

.banner-items {
  position: absolute;
  top: 56px;
  right: 71px;
  width: 168px;
  height: 168px;
}

.slider,
.frame,
.banner-img {
  width: 168px;
  height: 168px;
}

.banner-txt {
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  background-color: #f49321;
  border-radius: 15px;
}

.banner-money,
.banner-omoney {
  color: #ffffff;
  font-size: 20px;
  padding-left: 5px;
  line-height: 30px;
}

.banner-omoney {
  text-decoration: line-through;
  font-size: 18px;
}

.main-items {
  flex-direction: row;
  justify-content: space-between;
  height: 220px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.main-frame {
  align-items: center;
  width: 230px;
  height: 220px;
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 10px;
  padding-bottom: 10px;
}

.main-txt {
  left: 0;
  right: 0;
}

.main-title {
  text-align: center;
  font-size: 24px;
  color: #4c4c4c;
  line-height: 36px;
  font-weight: 700;
}

.main-desc {
  text-align: center;
  font-size: 20px;
  color: #d4080d;
  line-height: 30px;
}

.main-img {
  flex: 1;
  width: 140px;
  height: 140px;
}

.title,
.title-img {
  height: 80px;
  width: 750px;
}

.list-items {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.list-group {
  margin-top: 10px;
  height: 220px;
  flex-direction: row;
  justify-content: space-between;
}

.list-frame {
  align-items: center;
  width: 170px;
  height: 220px;
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 10px;
  padding-bottom: 10px;
}

.list-txt {
  left: 0;
  right: 0;
}

.list-title {
  text-align: center;
  font-size: 24px;
  color: #d95006;
  line-height: 36px;
  font-weight: 700;
}

.list-desc {
  text-align: center;
  font-size: 20px;
  color: #d95006;
  line-height: 30px;
}

.list-img {
  flex: 1;
  width: 140px;
  height: 140px;
}
</style>
