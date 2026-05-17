import axios from "axios";

const API =
  "http://localhost:5000/api";

export const sendPayment =
  (data) =>
    axios.post(
      `${API}/send`,
      data
    );

export const getTransactions =
  () =>
    axios.get(
      `${API}/transactions`
    );