<template>
  <div>
    <label for="">Enter your username</label>
    <input type="text" v-model="username">

    <label for="">Enter roomname is available</label>
    <input type="text" v-model="roomId">
    <button v-on:click="startChatting">Start chatting</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      roomId: ""
    }
  },
  methods: {
    startChatting() {
      this.$emit('start-chatting', this.username, this.roomId);
    }
  },
}


</script>
