<template>
  <div class="appScrollview">
    <div :style="{width: screenW}" v-for="(item,index) in newsdata" :key="index">
        <img :src="item['thumbnail_pic_s']" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "app-scrollview",
  created() {
    this.getToutiaoRequest();
  },
  methods: {
    ...mapActions(["getToutiaoRequest"])
  },
  computed: {
    ...mapState(["newsdata"]),
    
    screenW(){
      return document.documentElement.clientWidth + 'px'
    }
  }
};
</script>

<style lang="scss" scoped>
.appScrollview {
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  div{
    flex-shrink: 0;
    text-align: center;
    background-color: #eee;
  }
}
</style>