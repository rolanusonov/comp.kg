import axios from "axios";

const Api = axios.create({
  baseURL: `https://aiminkg.herokuapp.com/`,
});

export default Api;