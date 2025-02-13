import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL + "/json";

const httpClient = axios.create({
	baseURL: baseURL,
	timeout: 30000,
	headers: {
		Accept: "application/json",
	},
});

export default httpClient;
