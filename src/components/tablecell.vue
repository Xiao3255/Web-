<template>
  <div class="appTablecell">
    <div class="cell" v-for="(item,index) in newsdata" :key="index">
      <div class="title"></div>
      <div class="image">
        <div class="noimage">
          <img :src="item['thumbnail_pic_s']">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "app-tablecell",
  computed: {
    ...mapState(["newsdata"])
  }
};
</script>

<style lang="scss" scoped>
.appTablecell {
  .cell {
    display: flex;

    height: 200px;
    background-color: #0ff;
    .title {
      flex: 0 0 70%;
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 30%;
      .noimage {
        width: 180px;
        height: 180px;
        border-radius: 20px;
        background-color: #eee;
        img {
          width: 180px;
          height: 180px;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>