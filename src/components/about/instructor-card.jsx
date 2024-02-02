import Image from "next/image";
import React from "react";
import "./instructor-card.scss";

const InstructorCard = ({ firstName, lastName, title, image }) => {
	const displayName = `${firstName} ${lastName}`;
	const profileImage = `/images/instructors/${image}`;

	return (
		<div className="card instructor-card">
			<Image
				src={profileImage}
				width={400}
				height={400}
				alt={displayName}
			/>

			<div className="card-title">
				<h4>{displayName}</h4>
				<h6>{title}</h6>
			</div>
		</div>
	);
};

export default InstructorCard;
