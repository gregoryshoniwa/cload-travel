<template>
  <div class="navbar">
    <div>
      <img
        class="logo"
        src="@/assets/cloudtravel-logo.jpg"
        alt="cloud travel logo"
      />
    </div>
    <div class="menu">
      <select v-model="language">
        <option v-for="(lan, index) in languages" :value="lan" :key="index">
          {{ lan }}
        </option>
      </select>
      <select v-model="currency">
        <option v-for="(curr, index) in currencies" :value="curr" :key="index">
          {{ curr }}
        </option>
      </select>

      <span>My account</span>
      <span>Log out</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      message: "nav bar",
      language: "English",
      languages: ["English"],
      currency: "USD",
      currencies: ["USD"],
    };
  },
};
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  margin-right: 170px;
}
span {
  margin-top: 21.44px;
  margin-bottom: 19.56px;
  margin-left: 9.56px;
  margin-right: 9.56px;
}
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

  margin-top: 21.44px;
  margin-bottom: 19.56px;
  margin-left: 9.56px;
  margin-right: 9.56px;
  border: 0px;
}
select::-ms-expand {
  display: none;
}
.logo {
  height: 35px;
  width: 227.5px;
  left: 147px;
  top: 13px;
  border-radius: 0px;
  margin-left: 177px;
}
.menu {
}
</style>
