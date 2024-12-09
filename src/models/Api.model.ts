import type {
  //   InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from "axios";

export type JSONValues = string | string[] | number | boolean;
export type JSONObject = Record<
  string,
  JSONValues | Record<string, JSONValues>
>;

export interface IApiResponseData<R, E = JSONObject> {
  data?: R;
  response?: AxiosResponse;
  error?: JSONObject;
  errorResponse?: AxiosResponse;
  errorData?: E;
  isNetworkError?: boolean;
}

export interface IApiManagerData {
  baseUrl: string;
  headers: JSONObject;
  //   interceptRequest?: (
  //     config: InternalAxiosRequestConfig,
  //     isNetworkError: boolean
  //   ) => InternalAxiosRequestConfig;
  //   interceptResponse?: (response: AxiosResponse) => AxiosResponse;
  //   interceptErrorResponse?: (err: any) => Promise<any>;
}

export interface IApiHook {
  apiInstance: AxiosInstance;
  postRequest: <P, R, E = JSONObject>(
    endPoint: string,
    data: P,
    headers?: JSONObject
  ) => Promise<IApiResponseData<R, E>>;
  getRequest: <R, E = JSONObject>(
    endPoint: string,
    headers?: JSONObject
  ) => Promise<IApiResponseData<R, E>>;
  putRequest: <P, R, E = JSONObject>(
    endPoint: string,
    data: P,
    headers?: JSONObject
  ) => Promise<IApiResponseData<R, E>>;
  deleteRequest: <P, R, E = JSONObject>(
    endPoint: string,
    data?: P,
    headers?: JSONObject
  ) => Promise<IApiResponseData<R, E>>;
}

export interface IApiResponse<R> {
  statusCode: number;
  message: string;
  result: R;
  isEncrypted: boolean;
}

export interface IApiError<R> extends IApiResponse<R> {
  error: string;
}
