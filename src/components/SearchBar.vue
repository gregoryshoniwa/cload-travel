<template>
  <div class="headerbar">
    <SearchInput />
    <DateInput />
    <GuestInput />
    <button class="search-button">Search</button>
  </div>
</template>
<script>
import SearchInput from "./searchbar/SearchInput.vue";
import DateInput from "./searchbar/DateInput.vue";
import GuestInput from "./searchbar/GuestInput.vue";

export default {
  name: "SearchBar",
  components: {
    // HelloWorld,
    SearchInput,
    DateInput,
    GuestInput,
  },
  data() {
    return {
      message: "search bar",
    };
  },
};
</script>
<style scoped>
.headerbar {
  display: flex;
  align-items: center;
  padding: 10px;
  height: 70px;
  width: 100%;
  border-radius: 3px;
  background: #002d63;
}
.search-button {
  width: 150px;
  height: 53px;
  margin-left: 10px;
  margin-top: 5px;
  background-color: #00a1e5;
  border-radius: 3px;
  border: 0px;
  color: #ffffff;
  cursor: pointer;
}
.search-button:hover {
  background-color: #2bbfff;
}
.search-button:active {
  background-color: #90deff;
}
</style>
