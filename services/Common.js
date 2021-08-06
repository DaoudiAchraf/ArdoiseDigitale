import client from "./Client";

const getOrders = (ardoiseId) => client.get(`/api/orders/${ardoiseId}`);
const getOrdersByState = (state) => client.post(`/api/orders/state`, state);
const getArdoises = () => client.get('/api/ardoise');


export default {
    getOrders,
    getOrdersByState,
    getArdoises
}
