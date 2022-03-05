<template>
  <div class="card">
    <div class="card-title">
      <span>{{ leftText }}</span>
      <span style="color: #002d63">{{ rightText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftText: String,
    rightText: String,
  },
  data() {
    return {};
  },
};
</script>

<style>
.card {
  background: #ffffff;
  width: 290px;
  height: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.card-title {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 20px;
}
</style>
