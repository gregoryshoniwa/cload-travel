<template>
  <div class="selector">
    <div id="select-field">
      <div
        style="display: flex; align-items: center; justify-content: flex-start"
      >
        <i
          class="material-icons"
          style="font-size: 25px; color: #757575; padding-right: 15px"
        >
          event
        </i>
        <div id="select-text">{{ dateText }}</div>
      </div>
      <div>
        <div id="select-text2">{{ dateText2 }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateText: "Jul 19 – Jul 20",
      dateText2: "1 night",
    };
  },
};
</script>

<style scoped>
.select-text {
  font-size: 14px;
}
.select-text2 {
  font-size: 14px;
}
.hide {
  visibility: hidden;
}
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
  padding: 13px 20px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
</style>
