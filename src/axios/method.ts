import axios, {
    AxiosRequestConfig,
    CancelTokenSource,
    InternalAxiosRequestConfig,
  } from "axios";
  
  interface AxiosRequest {
    url: string;
    method: string;
    headers: Record<string, string>;
  }
  let pendingRequest: Function[] = [];
  export const setupAxios = () => {
    axios.interceptors.request.use(
      (request: InternalAxiosRequestConfig<AxiosRequest>) => {
        const { CancelToken } = axios;
        request.cancelToken = new CancelToken((cancel) => {
          pendingRequest.push(cancel);
        });
        return request;
      }
    );
  };
  
  export default setupAxios;
  
  export const cancelAllRequest = () => {
    pendingRequest.forEach((cancel: Function) => {
      cancel("All Requests Cancelled By The user");
    });
    pendingRequest = [];
  };
  
  export function axiosGet<T>(
    url: string,
    data: T | null = null,
    cancelToken: CancelTokenSource | null = null
  ) {
    return axios.get(`${process.env.REACT_APP_API_URL}${url}`, {
      params: data,
      cancelToken: cancelToken ? cancelToken.token : undefined,
    });
  }
  
  export function  axiosPost<T>(url: string, data: T | object) {
    return axios.post(`${process.env.REACT_APP_API_URL}${url}`, data);
  }
  
  export const axiosConfig = (
    method: string,
    url: string,
    config: any,
    data: object
  ) => {
    return axios({
      method: method,
      url: `${process.env.REACT_APP_API_URL}${url}`,
      ...config,
      data,
    });
  };
  export function axiosPatch<T>(
    url: string,
    data: T | object,
    config?: AxiosRequestConfig<T>
  ) {
    return axios.patch(`${process.env.REACT_APP_API_URL}${url}`, data, config);
  }
  
  export const axiosPut = (url: string, data: object) => {
    return axios.put(`${process.env.REACT_APP_API_URL}${url}`, data);
  };
  
  export const axiosDelete = (url: string) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}${url}`);
  };
  