import Swal from "sweetalert2";

export const swalAlert = (title, icon = "info", text = "") => {
	// icon: error, success, info, warning, question
	Swal.fire({
		title,
		text,
		icon,
	});
};

export const swalConfirm = (
	title,
	icon = "info",
	text = "",
	confirmButtonText = "Yes"
) => {
	// icon: error, success, info, warning, question
	return Swal.fire({
		title,
		text,
		icon,
		showCancelButton: true,
		confirmButtonText,
	});
};
