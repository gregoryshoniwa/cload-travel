<template>
  <div>
    <input
      type="range"
      min="0"
      max="5000"
      v-model="rightAmount"
      style="width: 250px"
    />

    <br />
    <br />

    <div class="range-input">
      <div class="input-box">
        <span class="prefix">SGD</span>
        <input type="text" v-model="leftAmount" />
      </div>

      <div>-</div>
      <div class="input-box">
        <span class="prefix">SGD</span>
        <input type="text" v-model="rightAmount" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightAmount: 2000,
      leftAmount: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  display: flex;
  align-items: center;
  max-width: 300px;
  background: #fff;
  border: 1px solid #a0a0a0;
  border-radius: 4px;
  padding-left: 0.5rem;
  overflow: hidden;
  font-family: sans-serif;
}

.input-box .prefix {
  font-weight: 300;
  font-size: 14px;
  color: #999;
}

.input-box input {
  flex-grow: 1;
  font-size: 14px;
  background: #fff;
  border: none;
  outline: none;
}

.input-box:focus-within {
  border-color: #777;
}

.range-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
