<template>
  <div id="app">
    <header>MC News</header>
    <div id="main">
      <appNavbar></appNavbar>
      <appTable></appTable>
    </div>
    <footer>
      <appTabbar></appTabbar>
    </footer>
  </div>
</template>

<script>
import appNavbar from "./components/NavBar";
import appTable from "./components/Table";
import appTabbar from "./components/TabBar";

export default {
  data() {
    return {
      newsData: []
    };
  },
  components: {
    appNavbar,
    appTable,
    appTabbar
  },
  created() {},
  beforeMount() {}
};
</script>

<style lang="scss">
body {
  margin: 0;
}
body::-webkit-scrollbar {
  display: none;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 10%;

    font-size: 50px;
    font-weight: 600;
    color: #eee;
    background: red;
  }
  #main {
    display: flex;
    flex-direction: column;
    flex: 0 0 80%;
  }
  footer {
    flex: 0 0 10%;
  }
}
</style>
