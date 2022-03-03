<template>
  <!-- <hello-world /> -->
  <div>
    <div class="nav"><NavBar /></div>
    <div class="header"><SearchBar /></div>
    <div class="body">
      <div class="body-left">left body</div>
      <div class="body-right">right body</div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import NavBar from "../components/NarBar.vue";
import SearchBar from "../components/SearchBar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",

  components: {
    // HelloWorld,
    NavBar,
    SearchBar,
    Footer,
  },
};
</script>
<style scoped>
.nav {
  border: 1px solid #ccc;
}
.header {
  border: 1px solid #ccc;
}
.body {
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
}
.body-left {
  border: 1px solid #ccc;
}
.body-right {
  border: 1px solid #ccc;
}
.footer {
  border: 1px solid #ccc;
}
</style>
