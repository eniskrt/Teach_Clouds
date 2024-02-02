"use client";
import Spacer from "@/components/common/spacer";
import Image from "next/image";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<>
			<Spacer />
			<div className="container">
				<div className="row g-5 g-sm-0">
					<div className="col-sm-6">
						<Image
							src="/images/errors/error.png"
							className="img-fluid"
							width="450"
							height={450}
							alt="Error"
						/>
					</div>
					<div className="col-sm-6 text-center text-sm-start">
						<h2>Something went wrong</h2>
						<p>
							An unexpected error has occurred. We apologize for
							the inconvenience. Our technical team has been
							notified and is working to resolve the issue. Please
							try again later. If the problem persists, feel free
							to contact our support team for assistance. Thank
							you for your understanding.
						</p>
						<button
							className="btn btn-primary"
							onClick={() => reset()}
						>
							Try Again
						</button>
					</div>
				</div>
			</div>
			<Spacer />
		</>
	);
};

export default Error;
