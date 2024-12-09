import axios from "axios";
import type { Method, AxiosHeaders } from "axios";
import type {
  IApiResponseData,
  IApiManagerData,
  JSONObject,
} from "../../models/Api.model";

export const useAPIManager = ({ baseUrl, headers }: IApiManagerData) => {
  const apiInstance = axios.create({
    baseURL: baseUrl,
    headers,
  });

  /* Interception API Request */
  //   apiInstance.interceptors.request.use(
  //     (config) => interceptRequest(config, !window.navigator.onLine),
  //     (error) => Promise.reject(error)
  //   );

  /* Interception API Response */
  //   apiInstance.interceptors.response.use(
  //     (res) => interceptResponse(res),
  //     (err) => interceptErrorResponse(err)
  //   );

  /*
   *@P => Payload
   *@R => Response
   *@E => ErrorData
   */
  const performRequest = async <R, P, E = JSONObject>(
    method: Method,
    url: string,
    data: P | JSONObject = {},
    headers?: JSONObject
  ): Promise<IApiResponseData<R, E>> => {
    try {
      const response = await apiInstance.request({
        method,
        url,
        data,
        headers: headers as AxiosHeaders,
      });
      if (response.status === 200 || response.status === 201) {
        return { data: response.data as R, response };
      } else throw response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      let errorData: IApiResponseData<R, E> = {
        error: error as JSONObject,
        isNetworkError:
          !window.navigator.onLine || error?.message === "Network Error",
      };

      if (error?.response) {
        errorData = { ...errorData, errorResponse: error.response };
      }

      if (error?.response?.data) {
        errorData = { ...errorData, errorData: error.response.data as E };
      }

      return errorData;
    }
  };

  /*
   *@P => Payload
   *@R => Response
   */
  const getRequest = async <R, E = JSONObject>(
    url: string,
    headers?: JSONObject
  ): Promise<IApiResponseData<R, E>> =>
    await performRequest("get", url, null, headers);

  const postRequest = async <R, P, E = JSONObject>(
    url: string,
    data: P,
    headers?: JSONObject
  ): Promise<IApiResponseData<R, E>> =>
    await performRequest("post", url, data, headers);

  const putRequest = async <R, P, E = JSONObject>(
    url: string,
    data: P,
    headers?: JSONObject
  ): Promise<IApiResponseData<R, E>> =>
    await performRequest("put", url, data, headers);

  const deleteRequest = async <R, P, E = JSONObject>(
    url: string,
    data?: P,
    headers?: JSONObject
  ): Promise<IApiResponseData<R, E>> =>
    await performRequest("delete", url, data, headers);

  return {
    apiInstance,
    postRequest,
    getRequest,
    putRequest,
    deleteRequest,
  };
};
