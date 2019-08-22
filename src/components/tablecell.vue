<template>
  <div class="appTablecell">
    <div
      class="cell"
      v-for="item in newsdata"
      :key="item['uniquekey']"
      :unikey="item['uniquekey']"
      :url="item['url']"
      @click="transitionPage($event)"
    >
      <div class="title">
        <p>{{item['title']}}</p>
        <span>{{item['date']}}</span>
      </div>
      <div class="image">
        <div class="noimage">
          <img :src="item['thumbnail_pic_s']" />
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
  },
  methods: {
    transitionPage(event) {
      var url = event.currentTarget.getAttribute("url");
      var unikey = event.currentTarget.getAttribute("unikey");
      this.$store.commit("syncSendURL", url);
      this.$router.push({
        name: "new",
        params: { unikey }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.appTablecell {
  .cell {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #c5c5c5;
    .title {
      position: relative;
      box-sizing: border-box;
      padding: 10px;
      flex: 0 0 70%;
      span {
        position: absolute;
        bottom: 0;
      }
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
          line-height: 180px;
          height: 180px;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>