import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllManagersByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/dean/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getManagerById = async (id) => {
	return fetch(`${API_URL}/dean/getManagerById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const deleteManager = async (id) => {
	return fetch(`${API_URL}/dean/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const createManager = async (payload) => {
	return fetch(`${API_URL}/dean/save`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

export const updateManager = async (payload) => {
	return fetch(`${API_URL}/dean/update/${payload.userId}`, {
		method: "put",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};
