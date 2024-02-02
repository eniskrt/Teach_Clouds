import React from "react";

const Loading = () => {
	return (
		<div
			style={{
				height: "80vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				className="spinner-border text-success"
				style={{ width: "3rem", height: "3rem" }}
				role="status"
			>
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>
	);
};

export default Loading;
