import { END_USER } from "@/utils/api-constants";
import { useApi } from "../api-managers";

export const useUserController = () => {
  const { getRequest } = useApi();

  const getUsers = async () => {
    const { result = [] } = await getRequest(END_USER);
    return result;
  };

  return {
    getUsers,
  };
};
