import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "397e293b4454459b90ae84cff8a23024",
  },
});
