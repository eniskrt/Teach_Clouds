import React from "react";
import "./style.scss"
import { FaGooglePlay, FaAppStore } from "react-icons/fa";


const MobileApp = () => {
	return (
		<div className="container mobile-app">
			<div className="row g-3 align-items-center">
				<div className="col-lg-7">
					<h2>Are you ready to start your online course?</h2>
				</div>
				<div className="col-lg-5 text-center text-lg-end">
					<a className="btn btn-outline-secondary">
						<FaAppStore /> App Store
					</a>
					<a className="btn btn-outline-secondary ms-3">
						<FaGooglePlay /> Play Store
					</a>
				</div>
			</div>
		</div>
	);
};

export default MobileApp;
