import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: "https://arc-remit.onrender.com/api",
});

// Send payment
export const sendPayment = (data) => {
  return API.post("/send", data);
};

// Get all transactions
export const getTransactions = () => {
  return API.get("/transactions");
};

export default API;