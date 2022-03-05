<template>
  <div class="selector" @click="openSelector">
    <div id="select-field">
      <i
        class="material-icons"
        style="font-size: 25px; color: #757575; padding-right: 15px"
      >
        search
      </i>
      <div id="select-text">{{ selectedCity }}</div>
    </div>
    <div id="list" :class="{ hide: isActive }">
      <li
        class="options"
        v-for="(city, index) in apiData"
        :key="index"
        @click="selectCity(city.label)"
      >
        <img src="@/assets/location-icon.png" alt="location-icon" />
        <p>{{ city.label }}</p>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: "",
      isActive: true,
      apiData: [
        {
          label: "Singapore, Singapore",
          cityCode: "sgsg",
        },
        {
          label: "Kuala Lumpur, Malaysia",
          cityCode: "klmy",
        },
        {
          label: "Manila, Philippines",
          cityCode: "mlph",
        },
      ],
    };
  },
  methods: {
    selectCity(data) {
      this.selectedCity = data;
      this.isActive = false;
    },
    openSelector() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.hide {
  visibility: hidden;
}
.selector {
  height: 50px;
  width: 470px;
  left: 145px;
  top: 10px;
  border-radius: 3px;
}
#select-field {
  width: 100%;
  padding: 13px 20px;
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
#list {
  width: 100%;
  margin-top: 5px;
  background: #fff;
  border-radius: 3px;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 9999;
  position: relative;
  border: 1px solid #ccc;
}
.options {
  width: 100%;
  padding: 3px;
  list-style: none;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.options img {
  padding-left: 5px;
  padding-right: 15px;
  width: auto;
  height: 30px;
}
.options:hover {
  background: #e5e5e5;
}
</style>
