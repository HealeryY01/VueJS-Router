import { createApp } from "vue";
import App from "./App.vue";
import UserList from "./pages/UserList.vue";
import PetList from "./pages/PetList.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
const routes = [
  {
    path: "/users", //http://localhost:8080/users
    component: UserList,
  },
  {
    path: "/pets", //http://localhost:8080/pets
    component: PetList,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes, //routes : routes,
  linkActiveClass: "active",
});
// createApp(App).mount('#app')
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
