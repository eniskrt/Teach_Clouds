import React from "react";
import ContactForm from "./contact-form";
import ContactMenu from "./contact-menu";
import Map from "./map";
import "./contact.scss";

const Contact = () => {
	return (
		<div className="contact">
			<div className="container">
				<div className="card">
					<div className="card-body">
						<div className="row g-5">
							<div className="col-md-7">
								<ContactForm />
							</div>
							<div className="col-md-5">
								<h2>Get In Touch</h2>
								<ContactMenu className="nav flex-column"/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Map />
		</div>
	);
};

export default Contact;
