<template>
  <appConstruct headerColor="#fff" footerColor>
    <template #header>
      <p id="title">MC News</p>
      <appNavbar></appNavbar>
    </template>
    <template>
      <appTable></appTable>
    </template>
    <template #footer>
      <appTabbar></appTabbar>
    </template>
  </appConstruct>
</template>

<script>
// @ is an alias to /src
import appConstruct from "@/components/Construct";
import appNavbar from "@/components/NavBar";
import appTable from "@/components/Table";
import appTabbar from "@/components/TabBar";

export default {
  name: "home",
  components: {
    appConstruct,
    appNavbar,
    appTable,
    appTabbar
  }
};
</script>

<style lang="scss" scoped>
#title {
  margin: 0;
  line-height: 150px;
  height: 150px;
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  color: #eee;
  background: red;
}
</style>