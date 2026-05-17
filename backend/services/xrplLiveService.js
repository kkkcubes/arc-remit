import xrpl from "xrpl";

let client;

export const connectXRPL = async () => {

  client = new xrpl.Client(
    "wss://s.altnet.rippletest.net:51233"
  );

  await client.connect();

  console.log("XRPL LIVE CONNECTED");

  return client;
};

export const getClient = () => client;