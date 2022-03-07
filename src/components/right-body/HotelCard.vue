<template>
  <div>
    <div class="card">
      <div class="image-side">
        <img
          class="large-image"
          :src="hotel.property.heroImage.url"
          alt="hero image"
        />

        <div
          class="small-image-container"
          v-if="hotel.property.gallery[0]['s'].url"
        >
          <img
            v-for="(data, index) in 4"
            :key="'C' + index"
            class="small-image"
            :src="hotel.property.gallery[index]['s'].url"
            alt="hero image"
          />
        </div>
      </div>
      <div class="text-side">
        <div style="display: flex; align-items: center; margin-bottom: 10px">
          <h3>{{ hotel.property.name }}</h3>
          <StarRating :rate="hotel.property.starRating" />
        </div>

        <p style="color: #333333; margin-bottom: 10px">
          {{ hotel.property.location.address }} (<a href="#">view map</a>)
        </p>
        <p
          v-if="hotel.property.reviews.summary"
          style="
            color: #757575;
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          "
        >
          {{ hotel.property.reviews.summary.text }} (<a href="#">view map</a>)
        </p>
      </div>
      <div class="end">
        <div class="top-end">
          <img src="@/assets/TY-score-widget-transparent.png" alt="score" />
        </div>
        <div class="bottom-side">
          <div
            style="text-align: -webkit-right"
            v-if="
              hotel.packages[0].displayRate.value >
              hotel.packages[0].adjustedDisplayRate.value
            "
          >
            <div class="savings">
              SAVE
              {{
                Math.round(
                  ((hotel.packages[0].displayRate.value -
                    hotel.packages[0].adjustedDisplayRate.value) /
                    hotel.packages[0].displayRate.value) *
                    100
                )
              }}% TODAY!
            </div>
          </div>

          <div style="color: #757575">Nightly avg.</div>
          <div class="prices">
            <p
              style="margin: 0; color: #757575; text-decoration: line-through"
              v-if="
                hotel.packages[0].displayRate.value >
                hotel.packages[0].adjustedDisplayRate.value
              "
            >
              {{ hotel.packages[0].displayRate.currency }}
              {{ parseFloat(hotel.packages[0].displayRate.value).toFixed(0) }}
            </p>
            <h2 style="margin: 0">
              {{ hotel.packages[0].adjustedDisplayRate.currency }}
              {{
                parseFloat(hotel.packages[0].adjustedDisplayRate.value).toFixed(
                  0
                )
              }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating.vue";
export default {
  props: {
    hotel: {
      type: Object,
      required: true,
    },
  },
  //   props: ["hotel"],
  data() {
    return {};
  },
  components: { StarRating },
};
</script>

<style scoped>
.prices {
  margin: 0;
  display: flex;
  align-items: flex-end;
}
.savings {
  width: 118px;
  height: 20px;
  font-weight: bold;
  font-size: 12px;
  background: #00a1e6;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-end {
}
.bottom-side {
  text-align: right;
}
.end {
  height: 90%;
  margin-right: 10px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.large-image {
  width: 200px;
  height: 160px;
}
.small-image-container {
  margin-top: 5px;
  height: 20%;
  display: flex;
  align-items: center;
}
.small-image {
  width: 48px;
  height: 48px;
  margin-right: 2px;
}
.image-side {
  height: 90%;
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.text-side {
  width: 55%;
  height: 90%;
}
.card {
  width: 904px;
  height: 230px;
  margin-bottom: 10px;
  position: relative;
  top: -40px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card:hover {
  box-shadow: 1px 1px 5px 1px #888888;
}
</style>
