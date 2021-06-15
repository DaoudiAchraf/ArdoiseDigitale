import { create } from "apisauce";
import authStorage from "../utils/Storage";

const apiClient = create({
  baseURL: "http://161.156.160.146:3000",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["authorization"] = authToken;
});

export default apiClient;
