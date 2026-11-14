import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  params: {
    key: "69e957d3092b493eb320ba094c1ebf7d",
  },
});
