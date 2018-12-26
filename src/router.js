import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Search from "./views/Search.vue";
import About from "./views/About.vue";
import Joke from "./views/Joke.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/joke",
      name: "joke",
      component: Joke
    }
  ]
});
