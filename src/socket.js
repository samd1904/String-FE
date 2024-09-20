import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  chatEvents: [],
  roomId: "",
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://localhost:3000/";

export const socket = io(URL, {autoConnect: false});

socket.on("connect", () => {
  console.log("recieved connection event")
  state.connected = true;
});

socket.on("room connected", (...args) => {
  console.log(args)
  state.roomId = args[0]
  state.connected = true;
  console.log("recieved connection event in room connected")
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("connect_error", (err) => {
  if(err.message === "invalid username"){
    alert("socket connection failed: Username is not valid!")
  }
});

socket.on("chat message", (...args) => {
  state.chatEvents.push(args[0]);
});
