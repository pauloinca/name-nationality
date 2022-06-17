import axios from "axios";

const Api = axios.create({
    baseURL: "https://api.nationalize.io/",
});

export default Api;
