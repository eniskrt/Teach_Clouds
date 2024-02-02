"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { createMessage } from "@/services/contact-service";
import * as Yup from "yup";

const FormSchema = Yup.object({
	name: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	subject: Yup.string().required("Required"),
	message: Yup.string().required("Required"),
});

export const createMessageAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createMessage(fields);
		const data = await res.json();

		if (!res.ok) {
			return response(false, "", data?.validations);
		}

		return response(true, "Your message was sent");
	} catch (err) {
		if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}

		throw err;
	}
};
