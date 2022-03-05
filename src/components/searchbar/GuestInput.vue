<template>
  <div class="selector">
    <div id="select-field">
      <div id="select-text">{{ guestText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guestText: "2 adults, 0 children, 1 room",
    };
  },
};
</script>

<style scoped>
.selector {
  height: 50px;
  width: 250px;
  left: 145px;
  top: 10px;
  border-radius: 3px;
  margin-left: 10px;
}
#select-field {
  width: 100%;
  padding: 17.8px 20px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
#select-field img {
  width: 12px;
}
</style>
