import client from "./Client";

const getOrders = (ardoiseId) => client.get(`/api/orders/${ardoiseId}`);


export default {
    getOrders,
}
