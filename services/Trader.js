import client from './Client';

//const getProfile = (user) =>client.post('/api/merchant/register',user)

const traderCompleteProfile = (profile) =>client.patch('/api/merchant/profile',profile);

const getArdoiseByMerchant = (merchant) => client.get(`/api/ardoise/${merchant}`);
const traderBulkUpdateProds = (prods) =>client.patch('/api/products/',prods);


const changeArdoiseState = (ardoiseId,state) => client.patch('/api/ardoise/changeState',{ardoiseId,state});

export default
{
    //getProfile,
    traderCompleteProfile,
    changeArdoiseState,
    traderBulkUpdateProds
}