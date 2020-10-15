import Vue from "vue";
import Index from "./Index.vue";
import router from "./router/router";
import "./styles";
/* 
  Crear una Carpeta LIBS y guardar alli las librerias
  de animaciones, scroll. owl carousel, y fixed navigation y custom.js
  y usarla en el index.html como con los iconos, a traves de <script>s para no importarlos en el app  
  Crear una carpeta styles y alli meter la la importacion de los estilos
  */
new Vue({
  router,
  render: (h) => h(Index),
}).$mount("#root");
