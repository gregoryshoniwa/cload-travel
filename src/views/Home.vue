<template>
  <!-- <hello-world /> -->
  <div>
    <div class="nav"><NavBar /></div>
    <div class="header" id="Header"><SearchBar /></div>
    <div class="body">
      <div class="body-left">
        <ShowMap style="margin-top: 15px" />
        <CheckBoxCard
          :leftText="'Price per night'"
          :rightText="'CLEAR'"
          :priceRange="'yes'"
        />
        <CheckBoxCard
          :leftText="'Reviews'"
          :rightText="'CLEAR'"
          :checkbox="checkBoxList"
        />

        <CheckBoxCard
          :leftText="'Star rating'"
          :rightText="'CLEAR'"
          :star="starCheckBoxList"
        />
        <CheckBoxCard
          :leftText="'Hotel name'"
          :rightText="''"
          :hotelName="'yes'"
        />

        <CheckBoxCard
          :leftText="'Reservation policy'"
          :rightText="''"
          :checkbox="reservationPolicyList"
        />

        <CheckBoxCard
          :leftText="'Meal plan'"
          :rightText="''"
          :checkbox="mealPlanList"
          :dropdown="3"
        />
        <CheckBoxCard
          :leftText="'Property type'"
          :rightText="''"
          :checkbox="propertyTypeList"
          :dropdown="3"
        />
        <CheckBoxCard
          :leftText="'Facilities'"
          :rightText="''"
          :checkbox="facilitiesList"
          :dropdown="3"
        />
      </div>
      <div class="body-right">
        <div style="margin-top: 20px; font-weight: bold">
          Singapore: 9999 properties found
        </div>
        <ButtonGroup />

        <Loading v-for="(data, index) in 4" :key="'A' + index" />

        <div
          class="no-results"
          v-if="
            results.length == 0 && callStatus == 'success' && !loadingStatus
          "
        >
          <i class="material-icons" style="font-size: 40px; color: #757575">
            search
          </i>
          <h3 style="color: #757575">
            Sorry! We couldn't find any properties for your search.
          </h3>
        </div>
        <div
          class="error-results"
          v-if="callStatus == 'error' && !loadingStatus"
        >
          <i class="material-icons" style="font-size: 40px; color: #757575">
            error_outline
          </i>
          <h3 style="color: #757575; margin-bottom: 0">
            Opps, something went wrong.
          </h3>
          <p style="color: #757575; margin: 0">error message here</p>
        </div>

        <HotelCard
          v-for="(data, index) in results"
          :key="'B' + index"
          :hotel="data"
        />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
import NavBar from "../components/NarBar.vue";
import SearchBar from "../components/SearchBar.vue";
import Footer from "../components/Footer.vue";
import ShowMap from "../components/left-body/ShowMap.vue";
import CheckBoxCard from "../components/left-body/CheckBoxCard.vue";
import ButtonGroup from "../components/right-body/ButtonGroup.vue";
import HotelCard from "../components/right-body/HotelCard.vue";
import Loading from "./Loading.vue";

export default {
  name: "Home",

  components: {
    // HelloWorld,
    NavBar,
    SearchBar,
    Footer,
    ShowMap,
    CheckBoxCard,
    ButtonGroup,
    HotelCard,
    Loading,
  },
  data() {
    return {
      checkBoxList: [
        { name: "Excellent", value: "999" },
        { name: "Very Good", value: "999" },
        { name: "Good", value: "999" },
        { name: "Fair", value: "999" },
        { name: "Poor", value: "999" },
        { name: "No review", value: "999" },
      ],
      starCheckBoxList: [
        { name: 5, value: "999" },
        { name: 4, value: "999" },
        { name: 3, value: "999" },
        { name: 2, value: "999" },
        { name: 1, value: "999" },
        { name: 0, value: "999" },
      ],
      reservationPolicyList: [
        { name: "Free cancellation", value: "999" },
        { name: "Book now, pay later", value: "999" },
        { name: "Pay at hotel", value: "999" },
      ],
      mealPlanList: [
        { name: "Room only", value: "999" },
        { name: "Breakfast", value: "999" },
        { name: "Lunch", value: "999" },
        { name: "Dinner", value: "999" },
        { name: "Half board", value: "999" },
        { name: "Full board", value: "999" },
        { name: "All inclusive", value: "999" },
      ],
      propertyTypeList: [
        { name: "Hotel", value: "999" },
        { name: "Hostel/Backpacker accomodation", value: "999" },
        { name: "Apartment", value: "999" },
        { name: "Aparthotel", value: "999" },
        { name: "Resort", value: "999" },
        { name: "Inn", value: "999" },
        { name: "Motel", value: "999" },
        { name: "Bed & breakfast", value: "999" },
        { name: "Guesthouse", value: "999" },
        { name: "Condo", value: "999" },
        { name: "All-inclusive property", value: "999" },
        { name: "Hostal", value: "999" },
      ],
      facilitiesList: [
        { name: "Swimming pool", value: "999" },
        { name: "Internet access", value: "999" },
        { name: "Non-smoking floor", value: "999" },
        { name: "Copying and faxing", value: "999" },
        { name: "Lost & found", value: "999" },
        { name: "Messaging service", value: "999" },
        { name: "Rental equipment", value: "999" },
        { name: "Medical facility", value: "999" },
        { name: "Trunk room", value: "999" },
        { name: "Central Market", value: "999" },
        { name: "Waterfront", value: "999" },
        { name: "Laundry Services", value: "999" },
        { name: "Transportation", value: "999" },
        { name: "Concierge services", value: "999" },
        { name: "Lobby", value: "999" },
        { name: "Ample parking", value: "999" },
        { name: "Plasma TV", value: "999" },
        { name: "Cable Channel", value: "999" },
        { name: "Hair Dryer", value: "999" },
        { name: "Safe deposit box", value: "999" },
        { name: "Refrigerator", value: "999" },
        { name: "Telephone", value: "999" },
        { name: "Controlled a/c", value: "999" },
        { name: "Boutique Toiletries", value: "999" },
        { name: "Ensuite Bathroom", value: "999" },
        { name: "Tea/Coffeemaking", value: "999" },
        { name: "Tennis", value: "999" },
        { name: "Golf", value: "999" },
        { name: "Horse Riding", value: "999" },
      ],
    };
  },

  computed: {
    results() {
      return this.$store.getters.getResults;
    },
    callStatus() {
      return this.$store.getters.callStatus;
    },
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    },
  },
  mounted() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction();
    };

    // Get the header
    var header = document.getElementById("Header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  },
};
</script>
<style scoped>
.error-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.no-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loading {
  width: 904px;
  margin-bottom: 10px;
  position: relative;
  top: -40px;
}
.nav {
}
.header {
  display: flex;
  justify-content: center;
  z-index: 99;
}
.body {
  display: flex;
  justify-content: center;
  min-height: 100%;

  background: #e5e5e5;
}
.body-left {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.body-right {
  width: 70%;
  margin-right: 115px;
}
.footer {
}

.sticky {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
}

.sticky + .content {
  padding-top: 102px;
}
</style>
