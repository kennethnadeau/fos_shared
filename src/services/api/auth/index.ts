import * as posts from "./post";
import * as get from "./get";

const auth = {
  ...posts,
  ...get
};

export { auth };
