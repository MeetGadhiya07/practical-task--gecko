import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export const get = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  const response: AxiosResponse<ApiResponse<T>> = await apiClient.get(
    url,
    config
  );
  return response.data;
};

export const post = async <T, U>(
  url: string,
  data: T,
  config?: AxiosRequestConfig
): Promise<ApiResponse<U>> => {
  const response: AxiosResponse<ApiResponse<U>> = await apiClient.post(
    url,
    data,
    config
  );
  return response.data;
};

export const del = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
  const response: AxiosResponse<ApiResponse<T>> = await apiClient.delete(
    url,
    config
  );
  return response.data;
};
