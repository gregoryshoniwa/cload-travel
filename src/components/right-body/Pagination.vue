<template>
  <div class="containter">
    <div style="color: #333333; margin-right: 10px">
      Showing Results 1 – 20 of 9999
    </div>
    <div>
      <ul id="pagination">
        <li>
          <a style="color: #002d63"><b>&lt;</b></a>
        </li>
        <li><a class="button">1</a></li>
        <li><a class="button active">2</a></li>
        <li><a class="button">3</a></li>
        <li><a class="button">4</a></li>
        <li><a class="button">5</a></li>
        <li><a class="button">6</a></li>
        <li><a class="button">...</a></li>
        <li><a style="margin-right: 10px">13</a></li>
        <li>
          <a style="color: #002d63"><b>&gt;</b></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    selectedButton(data) {
      this.selected = data;
    },
  },
};
</script>

<style scoped>
.button {
  margin-right: 10px;
  cursor: pointer;
}
.containter {
  display: flex;

  align-items: center;
}
#pagination {
  margin: 0;
  padding: 0;
  text-align: center;
}
#pagination li {
  display: inline;
}
#pagination li a {
  display: inline-block;
  text-decoration: none;
  padding: 5px 10px;
  color: #000;
}

/* Active and Hoverable Pagination */
#pagination li a {
  border-radius: 5px;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
#pagination li a.active {
  background-color: #002d63;
  color: #fff;
}
#pagination li a:hover:not(.active) {
  background-color: #ddd;
}
</style>
