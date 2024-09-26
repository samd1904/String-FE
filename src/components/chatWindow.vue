<template>
  <div>
    <h4>{{ roomText }}</h4>
    <h4>{{ connectionText }}</h4>
    <h4>Username: {{ username }}</h4>
    <ul id="messages">
      <li v-for="(event, index) in chatEvents" :key="index">
        {{ event.from }}>>>>&emsp; {{ event.msg }}
        <br>
      </li>
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
  props: [
    'username'
  ],

  computed: {
    roomText() {
      return `Room Id: ${state.roomId}`;
    },
    connectionText() {
      return `Connected: ${state.connected}`;
    },
    chatEvents() {
      console.log("events ", state.chatEvents)
      return state.chatEvents;
    }
  },

  methods: {
    sendMessage() {
      if (this.msg.trim()) {
        // Emit the chat message
        socket.emit('chat message', { msg: this.msg, to: state.roomId, from: this.username });
        // Clear the input field after sending the message
        this.msg = '';
      }
    }
  }
}
</script>


<style scoped>
  /* General Styles */
  div {
    width: 100%; /* Full width */
    height: 100vh; /* Full viewport height */
    display: flex;
    flex-direction: column; /* Stacks header, messages, and form vertically */
    padding: 0;
    font-family: Arial, sans-serif;
  }

  h4 {
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
    padding: 10px;
  }

  /* Messages container */
  ul#messages {
    list-style-type: none;
    padding: 10px;
    margin: 0;
    flex: 1; /* Take up remaining space in the container */
    overflow-y: auto; /* Enables scrolling for messages */
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  ul#messages li {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #e0f7fa;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  ul#messages li:nth-child(odd) {
    background-color: #f1f8e9;
  }

  ul#messages li::before {
    content: "💬 ";
    font-size: 18px;
  }

  ul#messages li span.from {
    font-weight: bold;
    color: #00796b;
  }

  ul#messages li span.msg {
    color: #333;
  }

  /* Form styles (input and button) */
  form#form {
    display: flex;
    gap: 10px;
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #ddd;
    position: sticky; /* Ensures it stays at the bottom */
    bottom: 0;
    width: 100%;
  }

  input#input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }

  button {
    padding: 10px 15px;
    background-color: #00796b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  button:hover {
    background-color: #004d40;
  }

  /* Full screen layout */
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  /* Ensures the input and messages container scale across the width */
  input#input, ul#messages li {
    width: 100%;
  }
</style>
