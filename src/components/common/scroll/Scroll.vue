<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: '',
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.scroll,{
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    this.scroll.on('scroll',(position) => {
      // console.log(position);
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp',() => {
      // console.log("上拉加载");
      this.$emit('pullingUp');
    })

    // console.log(this.scroll);
  },
  methods: {
    scrollTo(x,y,time=500) {
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
}
</script>

<style scoped>

</style>