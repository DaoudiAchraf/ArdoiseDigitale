import { create } from 'apisauce';
import authStorage from '../utils/Storage';

const apiClient = create({

  baseURL: 'http://10.20.48.254:3000'
  
});

apiClient.addAsyncRequestTransform(async(request)=>{
    const authToken = await authStorage.getToken();
    if(!authToken) return;
    request.headers['authorization'] = authToken;
  });


export default apiClient;