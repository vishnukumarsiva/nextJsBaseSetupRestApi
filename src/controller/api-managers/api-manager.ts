import type { AxiosInstance } from "axios";
import { JSONObject, IApiResponse, IApiError } from "../../models/Api.model";
import { useAPIManager } from "./useApiManager";

export const useApi = () => {
  const { apiInstance, getRequest, postRequest, putRequest, deleteRequest } =
    useAPIManager({
      baseUrl: "https://6755cb5011ce847c992b3085.mockapi.io",
      headers: {},
    });

  const getApi = async <R = null, E = IApiError<R>>(
    url: string,
    headers?: JSONObject
  ) => {
    const response = await getRequest<IApiResponse<R>, E>(url, headers);

    return { result: response?.data?.result, ...response };
  };

  const postApi = async <R = null, P = object, E = IApiError<R>>(
    url: string,
    data: P,
    headers?: JSONObject
  ) => {
    const response = await postRequest<IApiResponse<R>, P, E>(
      url,
      data,
      headers
    );

    return { result: response?.data?.result, ...response };
  };

  const putApi = async <R = null, P = object, E = IApiError<R>>(
    url: string,
    data: P,
    headers?: JSONObject
  ) => {
    const response = await putRequest<IApiResponse<R>, P, E>(
      url,
      data,
      headers
    );

    return { result: response?.data?.result, ...response };
  };

  const deleteApi = async <R = null, P = object, E = IApiError<R>>(
    url: string,
    data?: P,
    headers?: JSONObject
  ) => {
    const response = await deleteRequest<IApiResponse<R>, P, E>(
      url,
      data,
      headers
    );

    return { result: response?.data?.result, ...response };
  };

  return {
    apiInstance: apiInstance as AxiosInstance,
    getRequest: getApi,
    postRequest: postApi,
    putRequest: putApi,
    deleteRequest: deleteApi,
  };
};
