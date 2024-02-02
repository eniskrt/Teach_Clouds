"use client";
import { swalConfirm } from "@/helpers/swal";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const UnAuthorization = () => {
	const handleLogout = async () => {
		const resp = await swalConfirm("Are you sure to logout?");
		if (!resp.isConfirmed) return;

		signOut({ callbackUrl: "/login" });
	};

	return (
		<div className="container">
			<div className="row g-5 g-sm-0">
				<div className="col-sm-6">
					<Image
						src="/images/errors/401.png"
						className="img-fluid"
						width="450"
						height={450}
						alt="Unauthorized"
					/>
				</div>
				<div className="col-sm-6 text-center text-sm-start">
					<h2>You are unauthorized</h2>
					<p>
						It looks like you're already logged in but you're trying
						to access a page that you don't have permission to
						visit. Please log out first and log in again with the
						appropriate credentials or contact the system
						administrator.
					</p>
					<button className="btn btn-primary" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default UnAuthorization;
