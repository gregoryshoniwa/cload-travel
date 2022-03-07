<template>
  <div class="button-group">
    <div class="c-btn-group c-btn-group--block">
      <a
        :class="{ clicked: selected == 'Popularity', 'c-btn': true }"
        @click="selectedButton('Popularity')"
        >Popularity</a
      >

      <a
        :class="{
          clicked: selected.includes('Price'),
          'c-btn': true,
          dropdown: true,
        }"
        @click="openSelector()"
        >{{ priceOption }}</a
      >

      <a
        :class="{ clicked: selected == 'Reviews', 'c-btn': true }"
        @click="selectedButton('Reviews')"
        >Reviews</a
      >
      <a
        :class="{ clicked: selected == 'Discount', 'c-btn': true }"
        @click="selectedButton('Discount')"
        >Discount</a
      >
    </div>
    <div
      id="list"
      :class="{ hide: isActive2 }"
      @click="selcetPriceOtpion(priceOption2)"
    >
      <p style="padding: 15px">{{ priceOption2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      isActive2: true,
      priceOption: "Price (lowest first)",
      priceOption2: "Price (highest first)",
      selected: "Popularity",
    };
  },

  methods: {
    selectedButton(data) {
      this.selected = data;
    },
    openSelector() {
      this.isActive2 = !this.isActive2;
    },
    selcetPriceOtpion(data) {
      this.priceOption2 = this.priceOption;
      this.priceOption = data;
      this.isActive2 = true;
      this.selected = data;
    },
  },
};
</script>

<style scoped>
.hide {
  visibility: hidden;
}
#list {
  width: 225px;
  margin-top: 5px;
  margin-left: 225px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 99999;
  position: relative;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.dropdown {
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 1.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
.button-group {
  margin-top: 15px;
  width: 904px;
}
.c-btn {
  width: 226px;
  height: 44px;
  padding: 0.25em 0.5em;
  border: 0;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.c-btn:focus {
  cursor: pointer;
  background-color: #002d63;
  color: #fff;
}
.clicked {
  background-color: #002d63;
  color: #fff;
}
.c-btn-group {
  display: inline-flex;
  border: 0;
  overflow: hidden;
  border-radius: 5px;
}
.c-btn-group > .c-btn {
  border-radius: 0;
  border: none;
  border-right: 1px solid #dddddd;
}
.c-btn-group > .c-btn:last-child {
  border-right: none;
}
.c-btn-group--block {
  display: flex;
}
.c-btn-group--block > .c-btn {
  flex-grow: 1;
}
</style>
