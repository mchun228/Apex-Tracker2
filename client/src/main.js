import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);
import router from './router';
//import Toasted from 'vue-toasted';

//app.use(Toasted, {
 //   iconPack: 'fontawesome'
//});

app.use(router);


app.mount('#app');