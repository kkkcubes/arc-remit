import { Server }
from "socket.io";

let io;

export const initSocket = (server) => {

  io = new Server(server, {

    cors: {

      origin:
        "https://arc-remit-pgnj.vercel.app",

      methods:
        ["GET", "POST"],

      credentials: true,

    },

  });

  return io;
};

export const getIO = () => {

  if (!io) {

    throw new Error(
      "Socket.io not initialized"
    );

  }

  return io;
};