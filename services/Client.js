import { create } from "apisauce";
import authStorage from "../utils/Storage";

export const URL = "http://192.168.0.106:3000";
const apiClient = create({
  //baseURL: "http://192.168.1.4:3000",
  baseURL: URL,
});
//ssh root@161.156.160.146 -i nftswappersshprivate.key

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["authorization"] = authToken;
});

export default apiClient;
