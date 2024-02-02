import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllAdminsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/admin/getAll?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const deleteAdmin = async (id) => {
	return fetch(`${API_URL}/admin/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const createAdmin = async (payload) => {
	return fetch(`${API_URL}/admin/save`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};
