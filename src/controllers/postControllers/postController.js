import { baseURL } from "../../constants/connectionURL";

const addShopKeeperApi = async (data) => {
  const response = await fetch(`${baseURL}shopkeeper/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};
