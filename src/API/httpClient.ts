import axios from "axios";

const baseURL = "https://api.znami.usermd.net//wp-json/";

const httpClient = axios.create({
	baseURL: baseURL,
	timeout: 30000,
	headers: {
		Accept: "application/json",
	},
});

export default httpClient;
