<template>
  <div class="appTabbar">
    <div @click="goHome">
      <span>首页</span>
    </div>
    <div>
      <span>次页</span>
    </div>
    <div @click="toAbout">
      <span>尾页</span>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    goHome(){
      this.$router.push('home');
    },
    toAbout(){
      this.$router.push('about');
    },
  },
};
</script>

<style lang="scss" scoped>
.appTabbar {
  display: flex;
  background-color: #eee;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    height: 150px;
    span {
      text-align: center;
    }
  }
}
</style>