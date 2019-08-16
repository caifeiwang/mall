<template>
  <div class="tab-bar-box">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.tab-bar-box{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  box-shadow: 1px 0 1px rgba(0,0,0,.1);
  background-color: #fff;
  z-index: 10;
}
</style>