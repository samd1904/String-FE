<template>
  <div>
    <component :is="activeComp" v-model="activeComp" @start-chatting="startChatting" v-bind:username="username"></component>
  </div>
</template>

<script>
import { socket } from '@/socket.js'

export default {
  name: 'App',
  data() {
    return {
      activeComp: 'home',
      username: ""
    }
  },
  emits: [
    "start-chatting"
  ],
  methods: {
    generateNewRoomId() {
      let roomId = '', length = 5;
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        roomId += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
      }
      return roomId;
    },

    startChatting(username, roomId) {
      if (!roomId) {
        roomId = this.generateNewRoomId();
      }
      console.log("username: ", username)
      console.log("roomId:  ", roomId)
      this.username= username;
      socket.auth = { username, roomId };
      socket.connect();
      this.activeComp = "chat-window"
    },
  },
}
</script>

<style></style>
