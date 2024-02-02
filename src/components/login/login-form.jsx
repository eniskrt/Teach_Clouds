"use client";
import { useFormState } from "react-dom";
import "./login-form.scss";
import SubmitButton from "../common/form-fields/submit-button";
import { initialResponse } from "@/helpers/form-validation";
import { loginAction } from "@/actions/auth-actions";

const LoginForm = () => {
	const [state, dispatch] = useFormState(loginAction, initialResponse);


	return (
		<div className="container login-form">
			<div className="row justify-content-center ">
				<div className="col-md-8 col-lg-6">
					<div className="card">
						<div className="card-body">
							<h5>Please enter your username and password!</h5>

							{!state.success && state.message ? (
								<div className="alert alert-danger">
									{state.message}
								</div>
							) : (
								""
							)}

							<form action={dispatch} noValidate>
								<div
									className={`form-floating mb-3 ${
										state?.errors?.username
											? "is-invalid"
											: ""
									}`}
								>
									<input
										type="text"
										className="form-control"
										id="username"
										name="username"
										placeholder="Enter your username"
										defaultValue="root"
									/>
									<label htmlFor="username">
										Enter your username
									</label>
									<div className="invalid-feedback">
										{state?.errors?.username}
									</div>
								</div>

								<div
									className={`form-floating mb-3 ${
										state?.errors?.password
											? "is-invalid"
											: ""
									}`}
								>
									<input
										type="password"
										className="form-control"
										id="password"
										name="password"
										placeholder="Enter your password"
										defaultValue="123456Aa."
									/>
									<label htmlFor="password">
										Enter your password
									</label>
									<div className="invalid-feedback">
										{state?.errors?.password}
									</div>
								</div>
								<SubmitButton title="Login" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
