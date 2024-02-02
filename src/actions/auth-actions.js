"use server";

import { signIn } from "@/auth";
import { convertFormDataToJson, response } from "@/helpers/form-validation";
import { AuthError } from "next-auth";
import * as Yup from "yup";

const FormSchema = Yup.object({
	username: Yup.string().required("Required"),
	password: Yup.string().required("Required"),
});

export const loginAction = async (prevState, formData) =>{

    const fields = convertFormDataToJson(formData);

    try {
        FormSchema.validateSync(fields, { abortEarly: false});

        await signIn("credentials", fields);


    } catch (err) {
        if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		}
        else if(err instanceof AuthError){
            
            if(err.type==='CredentialsSignin'){
                return response(false, 'Invalid credentials')
            }
            // satir eklendi
            return response(false, 'Something went wrong.')
        }
        // satir eklendi
		throw (err);
    }

}