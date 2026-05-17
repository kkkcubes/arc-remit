let io;

export const initSocket = (server) => {

  io = require("socket.io")(server, {

    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
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