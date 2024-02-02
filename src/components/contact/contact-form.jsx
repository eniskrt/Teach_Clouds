"use client";
import { useFormState } from "react-dom";
import { FaRegPaperPlane } from "react-icons/fa";
import { TfiEmail, TfiEnvelope, TfiTag, TfiUser } from "react-icons/tfi";
import "./contact-form.scss";
import { createMessageAction } from "@/actions/contact-actions";
import { useRef } from "react";
import SubmitButton from "../common/form-fields/submit-button";
import { swalAlert } from "@/helpers/swal";
import { initialResponse } from "@/helpers/form-validation";

const ContactForm = () => {
	const [state, dispatch] = useFormState(createMessageAction, initialResponse);
	const formRef = useRef(null);

	if (state.message) {
		if (state.success) {
			formRef.current.reset();
			swalAlert(state.message, "success");
		} else {
			swalAlert(state.message, "error");
		}
	}

	return (
		<form
			className="contact-form"
			action={dispatch}
			noValidate
			ref={formRef}
		>
			<h2>Send Me Message</h2>

			<div className="row">
				<div className="col-lg-6">
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							<TfiUser />
						</span>
						<div
							className={`form-floating  ${
								state.errors?.name ? "is-invalid" : ""
							}`}
						>
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								placeholder="Your name"
							/>
							<label htmlFor="name">Your name</label>
						</div>
						<div className="invalid-feedback">
							{state.errors?.name}
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							<TfiEmail />
						</span>
						<div
							className={`form-floating  ${
								state.errors?.email ? "is-invalid" : ""
							}`}
						>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								placeholder="Email address"
							/>
							<label htmlFor="email">Email address</label>
						</div>
						<div className="invalid-feedback">
							{state.errors?.email}
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							<TfiTag />
						</span>
						<div
							className={`form-floating  ${
								state.errors?.subject ? "is-invalid" : ""
							}`}
						>
							<input
								type="text"
								className="form-control"
								id="subject"
								name="subject"
								placeholder="Subject"
							/>
							<label htmlFor="subject">Subject</label>
						</div>
						<div className="invalid-feedback">
							{state.errors?.subject}
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="input-group mb-3">
						<span className="input-group-text" id="basic-addon1">
							<TfiEnvelope />
						</span>
						<div
							className={`form-floating  ${
								state.errors?.message ? "is-invalid" : ""
							}`}
						>
							<textarea
								className="form-control"
								placeholder="Leave a message here"
								id="message"
								name="message"
								style={{ height: "100px" }}
							></textarea>

							<label htmlFor="message">
								Leave a message here
							</label>
						</div>
						<div className="invalid-feedback">
							{state.errors?.message}
						</div>
					</div>
				</div>
			</div>
			<SubmitButton title="Send" icon={<FaRegPaperPlane />} />
		</form>
	);
};

export default ContactForm;
