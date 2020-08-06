import Axios from "axios";

export function configure(baseUrl: string) {
  Axios.defaults.baseURL = baseUrl;
}

export * from "./account";
export * from "./otp";
