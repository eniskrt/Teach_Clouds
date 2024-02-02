import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const createMessage = (payload) => {
	return fetch(`${API_URL}/contactMessages/save`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
