"use client";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ title="Submit", icon = null }) => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="btn btn-primary"
			disabled={pending}
		>
			{pending ? (
				<div
					className="spinner-border spinner-border-sm text-secondary"
					role="status"
				>
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<>
					{icon} {title}
				</>
			)}
		</button>
	);
};

export default SubmitButton;
