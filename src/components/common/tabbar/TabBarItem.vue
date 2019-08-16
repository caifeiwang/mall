<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-active-img"></slot>
    </div>
    <div class="item-title" :style="activeStyle">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    props: {
      link: String,
      activeColor: {
        type: String,
        default: '#ff5777'
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link);
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) != -1 
      },
      activeStyle() {
        return this.isActive ? {'color': this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
}
.tab-bar-item img{
  display: block;
  width: 24px;
  height: 24px;
  margin: 3px auto;
}
.item-title{
  font-size: 14px;
}
</style>