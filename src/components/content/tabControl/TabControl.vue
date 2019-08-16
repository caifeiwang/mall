<template>
  <div class="tab-control">
    <div class="tab-control-item" 
      v-for="(item,index) in titles" :key="item" 
      :class="{active: index == currentIndex}"
      @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item.active span{
  padding: 5px;
  color: #ff5777;
  border-bottom: 2px solid #ff5777;
}

</style>