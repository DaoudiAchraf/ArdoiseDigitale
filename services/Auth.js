import client from "./Client";

const requestVerficationCode = (id, phoneNumber) =>
  client.post("/2fa/generate", { id, phoneNumber });
const sendVerficationCode = (id, code) =>
  client.post("/2fa/verify", { id, code });
const merchantRegister = (user) => client.post("/api/merchant/register", user);
const clientRegister = (user) => client.post("/api/client/register", user);

const getProfile = () => client.get("/api/merchant/profile");

const getProfiles = () => client.get("/api/merchant/profiles");

const signIn = (user) => client.post("/api/login", user);

export default {
  requestVerficationCode,
  sendVerficationCode,
  merchantRegister,
  clientRegister,
  signIn,
};
