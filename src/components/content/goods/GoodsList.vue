<template>
  <div class="goods">
    <slot></slot>
    <goods-list-item v-for="item in goods" :goodsItem="item">
      
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: '',
  data() {
    return {
      
    };
  },
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return {

        }
      }
    }
  }
}
</script>

<style scoped>

</style>