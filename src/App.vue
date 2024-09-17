
<template>
  <div>
    <component :is="activeComp" v-model="activeComp" @start-chatting="startChatting"></component>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        activeComp: 'home'
      }
    },
    emits:[
      "start-chatting"
    ],
    methods: {
      startChatting(){
        this.activeComp="chat-window" 
      }
    },
  }
</script>

<style>
</style>
