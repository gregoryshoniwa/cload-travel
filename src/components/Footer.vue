<template>
  <div>
    <div class="top-footer">
      <span>FAQ</span>
      <span>Terms of use</span>
      <span>Privacy policy</span>
      <span>Contact us</span>
    </div>
    <div class="bottom-footer">Copyright GlobalTripper 2021</div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      message: "footer bar",
    };
  },
};
</script>
<style>
span {
  padding: 10px;
  font-size: 14px;
  line-height: 20px;
}
.top-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 41.67%;
  height: 70px;
  width: 100%;
  color: #ffffff;
  background: #333333;
}
.bottom-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 58.33%;
  height: 50px;
  width: 100%;
  top: 70px;
  border-radius: 0px;
  color: #ffffff;
  background: #000000;

  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
}
</style>
