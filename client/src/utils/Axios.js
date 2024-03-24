import { Axios } from "./AxiosInterceptor";

export const getAxios = async (endpoint, params) => {
  try {
    const response = await Axios.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const postAxios = async (endpoint, data) => {
  try {
    const response = await Axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const putAxios = async (endpoint, data) => {
  try {
    const response = await Axios.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteAxios = async (endpoint) => {
  try {
    const response = await Axios.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
