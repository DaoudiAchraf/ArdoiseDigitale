import { create } from "apisauce";
import authStorage from "../utils/Storage";

const apiClient = create({
  baseURL: "http://192.168.137.6:3000",
});
//ssh root@161.156.160.146 -i nftswappersshprivate.key

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["authorization"] = authToken;
});

export default apiClient;
