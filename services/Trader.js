import client from './Client';

//const getProfile = (user) =>client.post('/api/merchant/register',user)

const traderCompleteProfile = (profile) =>client.patch('/api/merchant/profile',profile);

const traderBulkUpdateProds = (prods) =>client.patch('/api/products/',prods);



export default
{
    //getProfile,
    traderCompleteProfile,
    traderBulkUpdateProds
}