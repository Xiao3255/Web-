<template>
  <div class="appNavbar">
    <ul>
      <li v-for="(item, index) in categroy" :key="index">
        <a>{{item.type}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
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
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.appNavbar {
  overflow: auto;

  ul,li {
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
  }
}
</style> 