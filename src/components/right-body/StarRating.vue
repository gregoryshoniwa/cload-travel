<template>
  <div>
    <i
      class="material-icons"
      style="font-size: 15px; color: #e9bf2d; margin-left: 5px"
      v-for="(data, index) in newRate"
      :key="'B' + index"
    >
      star_rate
    </i>
  </div>
</template>

<script>
export default {
  props: ["rate"],
  computed: {
    remainder() {
      return this.rate % 1;
    },
    newRate() {
      return Math.floor(this.rate);
    },
  },
};
</script>

<style></style>
