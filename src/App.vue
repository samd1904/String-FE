
<template>
  <div id="app">
    <ChatWindow />
  </div>
</template>

<script>
import ChatWindow from './components/chatWindow.vue';
import { socket } from '@/socket';

export default {
  name: 'App',
  components: {
    ChatWindow
  },
  mounted() {
    socket.connect();  // Ensure this is correctly placed
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
