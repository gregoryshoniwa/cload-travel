<template>
  <div class="map">
    <button class="search-button">Show on map</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.map {
  width: 290px;
  height: 100px;
  margin-right: 10px;
  margin-bottom: 10px;

  background-image: url("../../assets/map-bg.jpeg"); /* The image used */
  background-color: #ffffff; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.search-button {
  width: 150px;
  height: 53px;
  margin-left: 10px;
  margin-top: 5px;
  background-color: #002d63;
  border-radius: 3px;
  border: 0px;
  color: #ffffff;
  cursor: pointer;
}
.search-button:hover {
  background-color: #004292;
}
.search-button:active {
  background-color: #0066e2;
}
</style>
