<template>
  <div>
    <component :is="activeComp" v-model="activeComp" @start-chatting="startChatting"></component>
  </div>
</template>

<script>
import { socket } from '@/socket.js'

export default {
  name: 'App',
  data() {
    return {
      activeComp: 'home'
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
      socket.auth = { username, roomId };
      socket.connect();
      this.activeComp = "chat-window"
    },
  },
}
</script>

<style></style>
