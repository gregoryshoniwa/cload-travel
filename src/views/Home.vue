<template>
  <!-- <hello-world /> -->
  <div>
    <div class="nav"><NavBar /></div>
    <div class="header" id="Header"><SearchBar /></div>
    <div class="body">
      <div class="body-left">
        <ShowMap style="margin-top: 15px" />
        <CheckBoxCard :leftText="'Price per night'" :rightText="'CLEAR'" />
        <CheckBoxCard :leftText="'Reviews'" :rightText="'CLEAR'" />
        <CheckBoxCard :leftText="'Star rating'" :rightText="'CLEAR'" />
        <CheckBoxCard :leftText="'Hotel name'" :rightText="''" />
        <CheckBoxCard :leftText="'Reservation policy'" :rightText="''" />

        <CheckBoxCard :leftText="'Meal plan'" :rightText="''" />
        <CheckBoxCard :leftText="'Property type'" :rightText="''" />
        <CheckBoxCard :leftText="'Facilities'" :rightText="''" />
      </div>
      <div class="body-right">
        <div style="margin-top: 20px; font-weight: bold">
          Singapore: 9999 properties found
        </div>
        <ButtonGroup />
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
