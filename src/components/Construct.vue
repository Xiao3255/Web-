<template>
  <div id="construct">
    <header :style="{backgroundColor : headerColor}">
      <slot name="header"></slot>
    </header>
    <div class="main">
      <slot>This is Main Area</slot>
    </div>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    headerColor: {
      type: String,
      required: true,
      default: "red"
    },
    footerColor: {
      type: String,
      required: true,
      default: "#eee"
    }
  }
};
</script>

<style lang="scss" scoped>
#construct{
    display: flex;
    flex-direction: column;
    height: 100vh;
    .main{
        flex:14;
        overflow: auto;
    }
    footer{
        flex: 1;
    }
}
</style>