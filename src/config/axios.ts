import axios, { AxiosError, AxiosRequestConfig, AxiosInstance } from "axios";
import environment from "@constants/environment";
import storageKeys from "@constants/storageKeys";

const { artsyAPIUrl } = environment;
const { userTokenKey } = storageKeys;

const defaultBaseUrl = artsyAPIUrl;
const defaultRequestInterceptor = (req: any) => {
  const token = sessionStorage.getItem(userTokenKey);
  if (token) {
    req.headers.authorization = `${token}`;
  }
  return req;
};

interface ICreateAxiosInstance {
  baseUrl?: string;
  requestInterceptor?: (req: any) => any;
}

const defaultConfig: ICreateAxiosInstance = {
  baseUrl: defaultBaseUrl,
  requestInterceptor: defaultRequestInterceptor,
};

const createAxiosInstance = ({
  baseUrl = defaultBaseUrl,
  requestInterceptor = defaultRequestInterceptor,
}: ICreateAxiosInstance = defaultConfig) => {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
  });

  axiosInstance.interceptors.request.use(requestInterceptor);

  axiosInstance.interceptors.response.use(
    (res) => res,
    (error: AxiosError<any>) => {
      if (error.response?.data.message) {
        throw new Error(error?.response?.data.message);
      }
      throw error;
    }
  );

  return axiosInstance;
};

export default createAxiosInstance;
export type { AxiosRequestConfig, AxiosInstance };
