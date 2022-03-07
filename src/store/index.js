import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "http://localhost:8080/job01/autosuggest";
const searchUrl = "http://localhost:8080/job01/search/";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    city: "",
    loadingStatus: false,
    callStatus: "",
    cityResults: [
      {
        label: "No results",
        cityCode: "",
      },
    ],
    results: [],
  },
  mutations: {
    setCity(state, payload) {
      state.city = payload;
    },
    setCityResults(state, payload) {
      state.cityResults = payload;
    },
    setResults(state, payload) {
      state.results = payload;
    },
    loadingStatus(state, payload) {
      state.loadingStatus = payload;
    },
    callStatus(state, payload) {
      state.callStatus = payload;
    },
  },
  actions: {
    async setCityResults(state) {
      try {
        state.commit("loadingStatus", true);
        const cities = await fetch(url, { headers });
        const c = await cities.json();
        // console.log(c);
        state.commit("setCityResults", c);
        state.commit("loadingStatus", false);
        state.commit("callStatus", "success");
      } catch (err) {
        console.log("request error : " + err.message);
        state.commit("loadingStatus", false);
        state.commit("callStatus", "error");
      }
    },
    async setResults(state, payload) {
      try {
        state.commit("setResults", []);
        state.commit("loadingStatus", true);
        const results = await fetch(searchUrl + payload, { headers });
        const r = await results.json();
        // console.log(r);
        state.commit("setResults", r.outlets.availability.results);
        state.commit("loadingStatus", false);
        state.commit("callStatus", "success");
      } catch (err) {
        console.log("request error : " + err.message);
        state.commit("loadingStatus", false);
        state.commit("callStatus", "error");
      }
    },
  },
  modules: {},
  getters: {
    getResults: (state) => state.results,
    getCityResults: (state) => state.cityResults,
    getCity: (state) => state.city,
    loadingStatus: (state) => state.loadingStatus,
    callStatus: (state) => state.callStatus,
  },
});
