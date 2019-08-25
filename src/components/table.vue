<template>
  <div class="appTable">
    <bScroll class="wrapper" :pullup="pullup" @pullup="loadData" :data="partNews">
      <div class="content">
        <appScrollview></appScrollview>
        <appTablecell></appTablecell>
      </div>
    </bScroll>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import bScroll from "./BScroll";
import appTablecell from "./TableCell";
import appScrollview from "./ScrollView";

export default {
  name: "app-table",
  data() {
    return {
      pullup: true
    };
  },
  created() {
    this.asyncRequestNewsURL("top");
  },
  computed: {
    ...mapState(["currentType", "type", "isMerge", "partNews"])
  },
  methods: {
    ...mapActions(["asyncRequestNewsURL", "asyncRequestNewsAndNoSlice"]),
    ...mapMutations(["mergeNews"]),
    loadData() {
      if (this.currentType !== this.type || !this.isMerge) {
        this.mergeNews();
      } else if (this.currentType === this.type && this.isMerge) {
        this.asyncRequestNewsAndNoSlice(this.currentType);
      }
    }
  },
  components: {
    appTablecell,
    appScrollview,
    bScroll
  }
};
</script>

<style lang="scss" scoped>
.appTable {
  height: 100%;
  .wrapper {
    height: 100%;
  }
}
</style>