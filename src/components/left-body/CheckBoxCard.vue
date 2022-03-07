<template>
  <div class="card">
    <div class="card-title">
      <span>{{ leftText }}</span>
      <span style="color: #002d63">{{ rightText }}</span>
    </div>
    <div v-if="checkbox">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: 20px;
          margin-left: 10px;
          margin-bottom: 9px;
        "
        v-for="(data, index) in checkbox"
        :key="'checkbox' + index"
      >
        <div style="display: flex; align-items: center">
          <input
            style="margin-right: 10px"
            type="checkbox"
            :id="data.name"
            name="check"
            :value="data.name"
          />
          <label :for="data.name">{{ data.name }}</label>
        </div>

        <p>{{ data.value }}</p>
      </div>
    </div>
    <div v-if="star">
      <div
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: 20px;
          margin-left: 10px;
          margin-bottom: 9px;
        "
        v-for="(data, index) in star"
        :key="'star' + index"
      >
        <div style="display: flex">
          <input
            style="margin-right: 10px"
            type="checkbox"
            :id="data.name"
            name="star"
            :value="data.name"
          />
          <StarRating v-if="data.name != '0'" :rate="data.name" />
          <label v-if="data.name == '0'" :for="data.name">No review</label>
        </div>

        <p>{{ data.value }}</p>
      </div>
    </div>
    <div v-if="hotelName == 'yes'">
      <SeachInput2 style="margin-right: 20px; margin-left: 20px" />
    </div>
    <div v-if="priceRange == 'yes'">
      <PriceRange
        style="margin-right: 20px; margin-left: 20px; margin-bottom: 20px"
      />
    </div>
    <div v-if="dropdown > 0">
      <select v-model="selectText"></select>
    </div>
  </div>
</template>

<script>
import StarRating from "../right-body/StarRating.vue";
import SeachInput2 from "./SeachInput2.vue";
import PriceRange from "./PriceRange.vue";
export default {
  props: {
    leftText: String,
    rightText: String,
    checkbox: Array,
    star: Array,
    hotelName: String,
    priceRange: String,
    dropdown: Number,
  },
  data() {
    return {
      selectText: "seemore",
      selectOption: "see less",
    };
  },
  components: { StarRating, SeachInput2, PriceRange },
};
</script>

<style scoped>
select {
  padding-right: 30px;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  margin-bottom: 19.56px;
  margin-left: 20px;

  border: 0px;
}

.card {
  background: #ffffff;
  width: 290px;
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
label {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #333333;
}
p {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #757575;
}
</style>
