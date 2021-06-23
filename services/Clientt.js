import client from "./Client";


const getProfile = () => client.get("/api/merchant/profile");

const getProfiles = () => client.get("/api/merchant/profiles");

const ardoiseDemande = (demande) => client.post("/api/ardoise",demande);

const getArdoiseByMerchant = (merchant) => client.get(`/api/ardoise/${merchant}`);

export default {
    getProfile,
    getProfiles,
    ardoiseDemande,
    getArdoiseByMerchant
};
