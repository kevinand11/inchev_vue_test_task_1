import Vue from "vue";
import App from "./App";
import axios from "axios";
import swal from "sweetalert2";

let API_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODYyMTk5MzEsInN1YiI6IjI2NTM3OTkiLCJyb2xlIjoidXNlciIsInVzZXJuYW1lIjoiZHVob3ZnYW1lcytwdWIzMmRlMGVjIn0.b164gMpUr6RFY6T-e7zqqPYzLk2ws3kx-nEHkQSDaac";

Vue.config.productionTip = false;

window.axios = axios;
window.axios.defaults.headers.common = {
  token: API_TOKEN
};

window.toast = swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000
});
window.Fire = new Vue();

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
