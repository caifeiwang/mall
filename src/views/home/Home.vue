<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control tab-control-fixed" 
                :titles="['流行', '新款', '精选']" 
                @tabClick="tabClick" 
                ref="tabControl1"
                v-show="tabisFixed"></tab-control>


    <scroll class="content" 
            ref="scroll" 
            :probe-type="3"
            :pull-up-load="true"
            @scroll="scroll"
            @pullingUp="pullingUp">
      <home-swiper :banners='banners'  @imgLoad="swiperImgLoad"></home-swiper>

      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>

      <goods-list :goods="showGoods">
        <div>{{currentType}}</div>
      </goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'

import {getHomeData, getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'

export default {
  name: '',
  data() {
    return {
      banners: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      taboffsetTop: 0,
      tabisFixed: false,
      scrollY: 0          // 记录页面离开时滚动的位置
    };
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 获取banner数据
    this.getHomeData();

    // 获取pop, new, sell 数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  mounted() {
    // 检测itemImgLoad 完成事件
    let refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('itemImgLoad', () => {
      // 重新获取 this.$refs.scroll.scroll.scrollerHeight 的高度
      // this.$refs.scroll.refresh();
      refresh();
    })
  },
  activated() {   // 当前路由进入活跃状态
    // console.log("activated");
    // console.log(this.scrollY);
    this.$refs.scroll.scrollTo(0,this.scrollY,0);
    this.$refs.scroll.refresh();
  },
  deactivated() { // 当前路由离开活跃状态
    // console.log("deactivated");
    this.scrollY = this.$refs.scroll.getScrollY();
  },
  methods: {
    /**
     * 操作相关的代码
     *  */
    // banner 图片加载完成
    swiperImgLoad() {
      // 获取 tabControl 距离顶部的高度
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500);
    },
    // 监听页面滚动事件
    scroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 800;
      this.tabisFixed = -position.y > this.taboffsetTop;
    },
    // 上拉加载更多数据
    pullingUp(){
      // console.log('上拉加载更多'); 
      // 默认只执行一次，请求完上一次之后，需要调用finishPullUp()表示上一次上拉加载已结束
      this.getHomeGoods(this.currentType);
    },
    /**
     * 请求接口相关的代码
     *  */
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.banner.lists;
      }) 
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res.list);
        this.goods[type].list.push(...res.list);
        this.goods[type].page++;

        this.$refs.scroll.finishPullUp();
      })
    }
  },
}
</script>

<style scoped>
#home{
  position: relative;
  /* 设置home的高度为100%视图的高度 */
  height: 100vh;   
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control-fixed{
  position: relative;
  z-index: 9;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>