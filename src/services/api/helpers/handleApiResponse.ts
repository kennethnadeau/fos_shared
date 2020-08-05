import { AxiosResponse } from "axios";

export const handleApiResponse = (response: AxiosResponse) => {
  if (response.status === 200) {
    return { data: response.data };
  }
  // TODO: flesh out with error-handling
  return {
    error: {}
  };
};
