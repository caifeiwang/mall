<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <img :src="item.img" alt="" @load="imgLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: '',
  data() {
    return {
      isLoad: false
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if(!this.isLoad){
        this.isLoad = true;
        this.$emit('imgLoad')
      }
    }
  }
}
</script>

<style scoped>

</style>