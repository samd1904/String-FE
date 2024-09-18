<template>
  <div>
    <h4>{{ roomText }}</h4>
    <h4>{{ connectionText }}</h4>
    <ul id="messages">
      <li v-for="(event, index) in chatEvents" :key="index">{{ event }}</li>
    </ul>
    <form id="form" v-on:submit.prevent>
      <input id="input" placeholder="Your message here!" v-model="msg" />
      <button type="submit" v-on:click="sendMessage">Send</button>
    </form>
  </div>

</template>

<script>
import { ref, computed } from 'vue';
import { state, socket } from '@/socket.js';

export default {
  name: 'ChatWindow',

  data() {
    return {
      msg: "",
    }
  },

  computed: {
    roomText() {
      return `Room Id: ${state.roomId}`;
    },
    connectionText() {
      return `Connected: ${state.connected}`;
    },
    chatEvents() {
      return state.chatEvents;
    }
  },

  methods: {
    sendMessage() {
      console.log("send pressed")
      if (this.msg.trim()) {
        // Emit the chat message
        socket.emit('chat message', { msg: this.msg, to: state.roomId });
        // Clear the input field after sending the message
        this.msg = '';
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding-bottom: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

#form {
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}

#input {
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.25rem;
}

#input:focus {
  outline: none;
}

#form>button {
  background: #333;
  border: none;
  padding: 0 1rem;
  margin: 0.25rem;
  border-radius: 3px;
  outline: none;
  color: #fff;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/*#messages>li {*/
/*  padding: 0.5rem 1rem;*/
/*}*/
</style>
