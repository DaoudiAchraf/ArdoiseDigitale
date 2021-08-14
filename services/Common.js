import client from "./Client";

const getOrdersByUserr = () => client.get(`/api/orders/userr`);
const getArdoises = () => client.get('/api/ardoise');
const getOrdersByArdoise = (ardoiseId) => client.get(`/api/orders/${ardoiseId}`);
const getOrders = () => client.get('/api/orders');

const refreshPushToken = (token) => client.patch('/api/login',token);

const postReview = (review) => client.post('api/review',review);

const getUserReviews = (user) => client.get('api/review',user);

const getArdoise = () => client.get('/api/ardoise');

export default {
    getOrdersByArdoise,
    getOrders,
    getOrdersByUserr,
    getArdoises,
    refreshPushToken,
    postReview,
    getUserReviews,
    getArdoise
}
