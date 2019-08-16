<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-img" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-active-img" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-title">首页</div>
      </tab-bar-item>

      <tab-bar-item link="/category">
        <img slot="item-img" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-active-img" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-title">分类</div>
      </tab-bar-item>

      <tab-bar-item link="/cart">
        <img slot="item-img" src="~assets/img/tabbar/cart.svg" alt="">
        <img slot="item-active-img" src="~assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-title">购物车</div>
      </tab-bar-item>

      <tab-bar-item link="/profile">
        <img slot="item-img" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active-img" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'

export default {
  name: '',
  data() {
    return {
      
    };
  },
  components: {
    TabBar, TabBarItem
  },
  mounted() {
      
  },
  methods: {
      
  },
}
</script>

<style scoped>

</style>