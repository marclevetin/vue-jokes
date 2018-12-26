import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: 'default'
  },
  mutations: {
    setSingleJoke(state, payload) {
      state.joke = payload;
    }
  },
  actions: {
    async getSingleJoke({ commit }) {
      try {
        let response = await fetch("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" }
        }).then(data => data.json()).then(myObject => myObject.joke);
        commit("setSingleJoke", response);
      } catch (error) {
        commit("setSingleJoke", "Oops.  Problem with API.");
      }
    }
  }
});
