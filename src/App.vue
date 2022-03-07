<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch("setCityResults");
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Mulish";
}
h1,
h2,
h3,
h4,
p {
  margin: 0;
}
p {
  color: #757575;
}
</style>
