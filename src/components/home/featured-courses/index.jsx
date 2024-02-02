import Courses from "@/components/courses/courses";
import React from "react";
import "./style.scss"

const FeaturedCourses = () => {
	return (
		<div className="featured-courses">
			<h2>Featured Courses</h2>

			<Courses featured={true} />
		</div>
	);
};

export default FeaturedCourses;
