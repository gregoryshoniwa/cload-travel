<template>
  <div>
    <div class="grey-footer">
      <div class="grey-left"></div>
      <div class="grey-right">
        <div
          style="
            width: 850px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          "
        >
          <a style="color: #002d63; cursor: pointer" @click="backToToop"
            >Back to the top</a
          >
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
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
import Pagination from "./right-body/Pagination.vue";
export default {
  name: "Footer",
  data() {
    return {
      message: "footer bar",
    };
  },
  methods: {
    backToToop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // document.body.scrollTop = 0; // For Safari
      // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
  components: { Pagination },
};
</script>
<style>
.grey-left {
  width: 30%;
}
.grey-right {
  width: 70%;
}
.grey-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 41.67%;
  height: 70px;
  width: 100%;
  color: #ffffff;
  background: #e5e5e5;
}
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
