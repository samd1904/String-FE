import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue';
import chatWindow from './components/chatWindow.vue'
const app = createApp(App);
app.component('home', Home);
app.component('chat-window', chatWindow);
app.mount('#app')
