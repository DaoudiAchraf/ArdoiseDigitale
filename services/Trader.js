import client from './Client';

//const getProfile = (user) =>client.post('/api/merchant/register',user)

const traderCompleteProfile = (profile) =>client.patch('/api/merchant/profile',profile);


export default
{
    //getProfile,
    traderCompleteProfile
}