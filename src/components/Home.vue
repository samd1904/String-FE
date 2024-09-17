<template>
  <div>
    <button v-on:click="startChatting">Start chatting</button>
  </div>
</template>
<script>
export default {
  methods: {
    startChatting() {
      this.$emit('start-chatting');
    }
  },
}


</script>
