import xrpl from "xrpl";

const client = new xrpl.Client(
  "wss://s.altnet.rippletest.net:51233"
);

export default client;