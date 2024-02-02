"use client";
import { updateManagerAction } from "@/actions/manager-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { config } from "@/helpers/config";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import InputMask from "react-input-mask-next";

const EditManagerForm = ({ data }) => {
	const [state, dispatch] = useFormState(
		updateManagerAction,
		initialResponse
	);

	return (
		<div className="container ">
			<div className="card">
				<div className="card-body">
					<div className="card-title">Edit</div>

					<form action={dispatch} noValidate>
						<input type="hidden" name="userId" value={data.userId}/>
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.name
										)}`}
										id="name"
										name="name"
										placeholder="First Name"
										defaultValue={data.name}
									/>
									<label htmlFor="name">First Name</label>
									<div className="invalid-feedback">
										{state.errors?.name}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.surname
										)}`}
										id="surname"
										name="surname"
										placeholder="Last Name"
										defaultValue={data.surname}
									/>
									<label htmlFor="surname">Last Name</label>
									<div className="invalid-feedback">
										{state.errors?.surname}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<select
										className={`form-select ${isInvalid(
											state.errors?.gender
										)}`}
										id="gender"
										name="gender"
										defaultValue={data.gender}
									>
										<option value="">Select</option>
										{config.genders.map((item) => (
											<option
												value={item.value}
												key={item.value}
											>
												{item.label}
											</option>
										))}
									</select>
									<label htmlFor="gender">Gender</label>
									<div className="invalid-feedback">
										{state.errors?.gender}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="date"
										className={`form-control ${isInvalid(
											state.errors?.birthDay
										)}`}
										id="birthDay"
										name="birthDay"
										placeholder="Birthdate"
										defaultValue={data.birthDay}
									/>
									<label htmlFor="birthDay">Birthdate</label>
									<div className="invalid-feedback">
										{state.errors?.birthDay}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.birthPlace
										)}`}
										id="birthPlace"
										name="birthPlace"
										placeholder="Place of birth"
										defaultValue={data.birthPlace}
									/>
									<label htmlFor="birthPlace">
										Place of birth
									</label>
									<div className="invalid-feedback">
										{state.errors?.birthPlace}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<InputMask
										className={`form-control ${isInvalid(
											state.errors?.phoneNumber
										)}`}
										id="phoneNumber"
										name="phoneNumber"
										placeholder="Phone number"
										mask="999-999-9999"
										defaultValue={data.phoneNumber}
									/>
									<label htmlFor="phoneNumber">
										Phone number
									</label>
									<div className="invalid-feedback">
										{state.errors?.phoneNumber}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<InputMask
										className={`form-control ${isInvalid(
											state.errors?.ssn
										)}`}
										id="ssn"
										name="ssn"
										placeholder="SSN"
										mask="999-99-9999"
										defaultValue={data.ssn}
									/>
									<label htmlFor="ssn">SSN</label>
									<div className="invalid-feedback">
										{state.errors?.ssn}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.username
										)}`}
										id="username"
										name="username"
										placeholder="Username"
										defaultValue={data.username}
									/>
									<label htmlFor="username">Username</label>
									<div className="invalid-feedback">
										{state.errors?.username}
									</div>
								</div>
							</div>

							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="password"
										className={`form-control ${isInvalid(
											state.errors?.password
										)}`}
										id="password"
										name="password"
										placeholder="Password"
									/>
									<label htmlFor="password">Password</label>
									<div className="invalid-feedback">
										{state.errors?.password}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="password"
										className={`form-control ${isInvalid(
											state.errors?.confirmPassword
										)}`}
										id="confirmPassword"
										name="confirmPassword"
										placeholder="Confirm password"
									/>
									<label htmlFor="confirmPassword">
										Confirm password
									</label>
									<div className="invalid-feedback">
										{state.errors?.confirmPassword}
									</div>
								</div>
							</div>
						</div>

						<div className="d-flex align-items-center justify-content-center gap-3">
							<CancelButton />
							<SubmitButton title="Update" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditManagerForm;
