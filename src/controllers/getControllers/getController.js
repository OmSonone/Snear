import { baseURL } from "../../constants/connectionURL";

export const getShopkeepersApi = async () => {
  const response = await fetch(`${baseURL}customer`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
