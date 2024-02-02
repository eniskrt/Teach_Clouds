"use client";
import { deleteAdminAction } from "@/actions/admin-actions";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import React from "react";
import { TfiTrash } from "react-icons/tfi";

const AdminToolbar = ({ row }) => {
	const { id, built_in } = row;

	const handleDelete = async () => {
		const res = await swalConfirm("Are you sure to delete?");
		if (!res.isConfirmed) return;

		try {
			const res = await deleteAdminAction(id);
		} catch (err) {
			console.log(err);
			swalAlert(err.message, "error");
		}
	};

	if (built_in) return null;

	return (
		<div>
			<button
				type="button"
				className="btn btn-link"
				onClick={handleDelete}
			>
				<TfiTrash />
			</button>
		</div>
	);
};

export default AdminToolbar;
