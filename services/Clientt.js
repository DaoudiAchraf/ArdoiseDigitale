import client from "./Client";


const getProfile = () => client.get("/api/merchant/profile");

const getProfiles = () => client.get("/api/merchant/profiles");



export default {
    getProfile,
    getProfiles
};
