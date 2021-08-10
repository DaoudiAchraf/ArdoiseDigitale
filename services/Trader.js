import client from './Client';

//const getProfile = (user) =>client.post('/api/merchant/register',user)

const traderCompleteProfile = (profile) =>client.patch('/api/merchant/profile',profile);

const getArdoiseByMerchant = (merchant) => client.get(`/api/ardoise/${merchant}`);


export default
{
    //getProfile,
    traderCompleteProfile
}