<template>
  <div id="loginFormDiv">
    <label class="formLabel" id="username">Enter your username:</label>
    <br>
    <input class="loginInput" type="text" v-model="username">
    <br>
    <label class="formLabel" id="roomId">Enter roomname(optional):</label>
    <br>
    <input class="loginInput" type="text" v-model="roomId">
    <br>
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

<style scoped>
#loginFormDiv {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.formLabel {
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.loginInput {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0 20px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
 margin-top: 20px; 
}

button:hover {
  background-color: #45a049;
}

button:focus {
  outline: none;
}

br {
  line-height: 2;
}
</style>
