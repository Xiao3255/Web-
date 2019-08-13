<template>
  <div id="app">
    <header>MC News</header>
    <div id="main">
      <appNavbar class="navbar"></appNavbar>
      <appTable class="table"></appTable>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import {getToutiao} from "./news/getNews";
import appNavbar from "./components/navBar";
import appTable from "./components/table";

export default {
  data() {
    return {
      newsData: [],
    };
  },
  components: {
    appNavbar,
    appTable
  },
  created() {
    getToutiao().then(res => {
      this.newsData = res.data.result.data;
    },err => {
      console.log(err);
    })
  },
  beforeMount() {
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
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
    .navbar {
      flex: 0 0 6%;
    }
    .table {
      flex: 0 0 94%;
    }
  }
  footer {
    flex: 0 0 10%;
  }
}
</style>
