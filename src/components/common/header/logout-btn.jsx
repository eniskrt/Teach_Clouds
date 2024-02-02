"use client";
import { swalConfirm } from "@/helpers/swal";
import React from "react";
import { signOut } from "next-auth/react";

const LogoutBtn = () => {
	const handleLogout = async () => {
		const resp = await swalConfirm("Are you sure to logout?");
		if (!resp.isConfirmed) return;

		signOut({ callbackUrl: "/" });
	};
	return (
		<a className="nav-link" role="button" onClick={handleLogout}>
			Logout
		</a>
	);
};

export default LogoutBtn;
