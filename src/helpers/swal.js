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


export const swalToast = (title, icon ="success") => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
    Toast.fire({
        icon,
        title,
    });
};