import Axios from "axios";

import { account } from "./account";
import { otp } from "./otp";

export function configure(baseUrl: string) {
  Axios.defaults.baseURL = baseUrl;
}

export { account, otp };
