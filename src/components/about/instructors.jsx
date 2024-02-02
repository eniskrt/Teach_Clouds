import React from "react";
import instructors from "@/helpers/data/instructors.json";
import InstructorCard from "./instructor-card";
import "./instructors.scss"

const Instructors = () => {
	return (
		<div className="instructors container">
			<div className="row g-4">
				<div className="col-lg-6">
					<h2>Our Most Experienced Instructors</h2>
				</div>

				{instructors.map((item) => (
					<div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
						<InstructorCard {...item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Instructors;
