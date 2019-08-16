<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.image" alt="" @load="itemImgLoad">
      <div class="item-title">{{goodsItem.title}}</div>
      <div>
        <span>{{goodsItem.price}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemImgLoad() {
      // 向事件总线发射一个事件
      this.$bus.$emit('itemImgLoad');
    }
  }
}
</script>

<style scoped>
.goods-item{
  display: inline-block;
  width: 50%;
  padding: 10px;
  vertical-align: top;
}
.goods-item img{
  width: 100%;
}
.item-title{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>