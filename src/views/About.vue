<template>
  <appConstruct headerColor="#eee" footerColor>
    <template #header>
      <div class="profile">Profile</div>
    </template>
    <template>
      <div class="setting"></div>
    </template>
    <template #footer>
      <appTabbar></appTabbar>
    </template>
  </appConstruct>
</template>

<script>
import appTabbar from "@/components/TabBar";
import appConstruct from "@/components/Construct";

export default {
  components: {
    appTabbar,
    appConstruct
  },
};
</script>

<style lang="scss" scoped>
.profile {
  height: 150px;
  line-height: 150px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
}
</style>
