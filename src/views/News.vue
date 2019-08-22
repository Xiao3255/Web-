<template>
  <div>
    <header>
      <div class="back" @click="goBack">
        <span>&lt;</span>
      </div>
    </header>
    <div v-html="htmlString" class="content"></div>
    <!-- <iframe
        :src="url"
        width="100%"
        height="800"
        style="border:none"
        scrolling="auto"
        sandbox="allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    ></iframe>-->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["url", "htmlString"])
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.dispatch({
        type: "asyncRequestNewsDataURL",
        url: this.url
      });
    }
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.fetchData();
    });
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  background-color: #eee;
  height: 150px;
  .back {
    position: absolute;
    top: 50%;
    left: 2%;
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    border-radius: 10px;
    color: aqua;
    background-color: #fff;
    transform: translateY(-50%);
  }
}
.content {
  margin: 0 20px;
}
</style>