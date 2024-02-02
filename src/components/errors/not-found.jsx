import Image from "next/image";
import React from "react";

const NotFound = () => {
	return (
		<div className="container">
			<div className="row g-5 g-sm-0 align-items-center ">
				<div className="col-sm-6">
					<Image
						src="/images/errors/404.png"
						className="img-fluid"
						width="450"
						height={450}
						alt="Not found"
					/>
				</div>
				<div className="col-sm-6 text-center text-sm-start">
					<h2>Page not found</h2>
					<p>
						The requested page could not be found on our server. We
						apologize for any inconvenience. Please check the URL
						for errors or return to the homepage. If you believe
						this is an error, kindly contact our support team for
						assistance. Thank you for your understanding.
					</p>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
