import client from "./Client";

const getMyProfile = () => client.get("/api/client/profile");

const getProfile = () => client.get("/api/merchant/profile");

const getProfiles = () => client.get("/api/merchant/profiles");

const ardoiseDemande = (demande) => client.post("/api/ardoise", demande);

const getArdoiseByMerchant = (merchant) =>
  client.get(`/api/ardoise/${merchant}`);

const getArdoise = () => client.get("/api/ardoise");

const getMerchantCatalog = (merchant, category, subCategory) =>
  client.get(`/api/products/${merchant}/${category}/${subCategory}`);

const getMerchantCatalogOwnerId = (merchant) =>
  client.get(`/api/products/${merchant}`);

const getOrders = () => client.get(`/api/orders/${ardoiseId}`);

const sendOrder = (order) => client.post("/api/orders/", order);

export default {
  getProfile,
  getProfiles,
  ardoiseDemande,
  getArdoiseByMerchant,
  getArdoise,
  getMerchantCatalog,
  getMerchantCatalogOwnerId,
  getOrders,
  sendOrder,
  getMyProfile,
};
