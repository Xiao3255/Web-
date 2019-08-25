<template>
  <div class="appNavbar">
    <ul>
      <li v-for="(item, index) in categroy" :key="index" @click="currentType = item.value">
        <a :class="[currentType === item.value ? 'selected': '']">{{item.type}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  name: "app-navbar",
  data() {
    return {
      categroy: [
        { type: "头条", value: "top" },
        { type: "社会", value: "shehui" },
        { type: "国内", value: "guonei" },
        { type: "国际", value: "guoji" },
        { type: "娱乐", value: "yule" },
        { type: "体育", value: "tiyu" },
        { type: "军事", value: "junshi" },
        { type: "科技", value: "keji" },
        { type: "财经", value: "caijing" },
        { type: "时尚", value: "shishang" }
      ],
      currentType: "top"
    };
  },
  methods: {
    ...mapMutations(["changeStatus"]),
    ...mapActions(["asyncRequestNewsURL"]),
    catchChange(val, oldval) {
      if (val !== oldval) {
        this.changeStatus({ currentType: this.currentType, isMerge: false });
        this.asyncRequestNewsURL(this.currentType);
      }
    }
  },
  watch: {
    currentType: {
      handler: "catchChange",
      immediate: false
    }
  }
};
</script>

<style lang="scss" scoped>
.appNavbar {
  overflow: auto;

  ul,
  li {
    margin: 0;
    padding: 0;
  }
  ul {
    display: flex;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    height: 100px;
    width: 120px;
    list-style: none;
    cursor: pointer;
    a {
      text-decoration: none;
      color: #000;
    }
    a.selected {
      border-radius: 35px;
      background-color: #e0e0e0;
    }
  }
}
</style> 