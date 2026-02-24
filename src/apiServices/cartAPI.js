import api from "./axiosInstance";

export const getCartItems = async () => {
  const { data } = await api.get("/items");
  return data;
};

export const addCartItem = async (item) => {
  const { data } = await api.post("/items", item);
  return data;
};

export const updateCartItem = async (id, updatedItem) => {
  const { data } = await api.put(`/items/${id}`, updatedItem);
  return data;
};

export const deleteCartItem = async (id) => {
  const { data } = await api.delete(`/items/${id}`);
  return data;
};
