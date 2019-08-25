<template>
  <div class="appScrollview">
    <div :style="{width: screenW}">
      <slider ref="slider" :options="options" @tap="onTap" @slide="onSlide">
        <slideritem v-for="(item,index) in randomNews" :key="index">
          <img
            ref="img"
            :src="item['thumbnail_pic_s']"
            :imgurl="item['url']"
            :unikey="item['uniquekey']"
          />
        </slideritem>
      </slider>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import { mapActions, mapState } from "vuex";

export default {
  name: "app-scrollview",
  components: {
    slider,
    slideritem
  },
  data() {
    return {
      options: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 1000,
        loop: true,
        direction: "horizontal",
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: "ease",
        speed: 300
      }
    };
  },
  methods: {
    ...mapActions(["asyncRequestNewsURL"]),
    onTap(data) {
      this.$refs.slider.$emit("autoplayStop");
      var imgurl = this.$refs.img[data.currentPage].getAttribute("imgurl");
      var unikey = this.$refs.img[data.currentPage].getAttribute("unikey");
      this.$store.commit("syncSendURL", imgurl);
      this.$router.push({
        name: "new",
        params: { unikey }
      });
    },
    onSlide() {
      this.$refs.slider.$emit("autoplayStart", 1000);
    }
  },
  computed: {
    ...mapState(["randomNews"]),

    screenW() {
      return document.documentElement.clientWidth + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.appScrollview {
  display: flex;
  overflow: auto;
  div {
    flex-shrink: 0;
    text-align: center;
    background-color: #eee;
  }
}
</style>