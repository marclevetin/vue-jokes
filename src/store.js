import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: 'default'
  },
  mutations: {
    setJokes(state, payload) {
      state.joke = payload;
    }
  },
  actions: {
    async getJokes({ commit }) {
      try {
        let response = await fetch("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" }
        }).then(data => data.json()).then(myObject => myObject.joke);
        commit("setJokes", response);
      } catch (error) {
        commit("setJokes", ["nuts"]);
      }
    }
  }
});
