import axios, {
  AxiosError, AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig,
} from 'axios';

import StorageUtils from './StorageUtils.ts';
import debugLog from './Logger.ts';
import constants from './SessionConstants.ts';

const TAG = 'NetworkOps: ';

interface CustomAxiosResponse extends AxiosResponse {
  data: {
    code: string;
    message: string;
  };
}
const unAuthRoutes: string[] = [];
const controllers: AbortController[] = [];

const API_TIMEOUT = 10000;
export const instance = axios.create({
  timeout: API_TIMEOUT,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    let newConfig = config;
    const url = config.url as string;
    try {
      const isTokenRequired = !unAuthRoutes.includes(url);
      if (isTokenRequired) {
        const token = StorageUtils.getString(constants.TOKEN);
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
            Authorization: `Bearer ${token}`,
          } as AxiosRequestHeaders,
          timeout: API_TIMEOUT,
        };
      } else {
        newConfig = {
          ...newConfig,
          headers: {
            ...newConfig.headers,
          } as AxiosRequestHeaders,
          timeout: API_TIMEOUT,
        };
      }

      const controller = new AbortController();
      newConfig.signal = controller.signal;
      controllers.push(controller);
      return newConfig;
    } catch (e: unknown) {
      if (e instanceof Error) {
        debugLog(TAG, `Error in interceptor request', ${e.message}`);
      }
    }
    return newConfig;
  },
  (error: AxiosError) => {
    debugLog(TAG, `Error in interceptor request', ${error.message}`);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res: CustomAxiosResponse) => Promise.resolve(res),
  (error: AxiosError) => {
    if (error?.response?.status === 403) {
      StorageUtils.removeString(constants.TOKEN);
      controllers.forEach((controller) => controller.abort());
      controllers.length = 0;
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

interface RequestFunctions {
  makeGetRequest: <T>(URL: string) => Promise<AxiosResponse<T, T>>;
  makePostRequest: <T>(URL: string, data?: object) => Promise<AxiosResponse<T, T>>;
  makePostFormRequest: <T>(URL: string, data?: object) => Promise<AxiosResponse<T, T>>;
  makePutRequest: <T>(URL: string, data?: object) => Promise<AxiosResponse<T, T>>;
  makePatchRequest: <T>(URL: string, data?: object) => Promise<AxiosResponse<T, T>>;
  makeDeleteRequest: <T>(URL: string, data?: object) => Promise<AxiosResponse<T, T>>;
}

export const ApiRequest: RequestFunctions = {
  makeGetRequest: <T>(URL: string) => instance.get<T>(URL),
  makePostRequest: <T>(URL: string, data: object | undefined) => instance.post<T>(URL, data),
  makePostFormRequest: <T>(URL: string, data: object | undefined) => instance.postForm<T>(URL, data),
  makePutRequest: <T>(URL: string, data: object | undefined) => instance.put<T>(URL, data),
  makePatchRequest: <T>(URL: string, data: object | undefined) => instance.patch<T>(URL, data),
  makeDeleteRequest: <T>(URL: string, data: object | undefined) => instance.delete<T>(URL, data),
};
