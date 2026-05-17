import { io } from "socket.io-client";

// Create socket connection
const socket = io(
  "https://arc-remit.onrender.com",
  {
    transports: ["websocket"],
  }
);

export default socket;