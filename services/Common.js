import client from "./Client";

const getArdoises = () => client.get("/api/ardoise");
const getOrdersByArdoise = (ardoiseId) =>
  client.get(`/api/orders/${ardoiseId}`);

const getOrders = () => client.get("/api/orders");
//const getOrdersByUserr = () => client.get("/api/orders/blabla");

const refreshPushToken = (token) => client.patch("/api/login", token);

const postReview = (review) => client.post("api/review", review);

const getUserReviews = (user) => client.get("api/review", user);

const getArdoise = () => client.get("/api/ardoise");
const changeArdoiseState = (state) =>
  client.patch("api/ardoise/changeState", state);

const patchOrder = (orderId, order) =>
  client.patch(`/api/orders/${orderId}`, order);

export default {
  getOrdersByArdoise,
  getOrders,

  getArdoises,
  refreshPushToken,
  postReview,
  getUserReviews,
  getArdoise,
  patchOrder,
  changeArdoiseState,
};
