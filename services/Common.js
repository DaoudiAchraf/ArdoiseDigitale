import client from "./Client";

const getOrdersByArdoise = (ardoiseId) => client.get(`/api/orders/${ardoiseId}`);
const getOrders = () => client.get('/api/orders');

const refreshPushToken = (token) => client.patch('/api/login',token);

const postReview = (review) => client.post('api/review',review);

const getUserReviews = (user) => client.get('api/review',user);

export default {
    getOrdersByArdoise,
    getOrders,
    refreshPushToken,
    postReview,
    getUserReviews
}
