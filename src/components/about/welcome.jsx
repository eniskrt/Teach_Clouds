import React from "react";
import Image from "next/image";
import aboutImage from "../../../public/images/about/welcome.jpg";
import { config } from "@/helpers/config";

const Welcome = () => {
	return (
		<div className="welcome container">
			<div className="row g-4 align-items-center ">
				<div className="col-md-6">
					<Image
						src={aboutImage}
						alt={config.project.name}
						className="img-fluid "
					/>
				</div>
				<div className="col-md-6">
					<h2 className="text-primary">Welcome to the most preferred IT School</h2>
					<p>
						Through a combination of lectures, readings,
						discussions, students will gain a solid foundation in
						educational psychology.
					</p>
					<ul>
						<li>
							Cutting-edge curriculum for the latest IT trends and
							technologies.
						</li>
						<li>
							Expert instructors passionate about sharing their
							knowledge.
						</li>
						<li>
							Hands-on training and real-world projects for
							practical experience.
						</li>
						<li>
							Earn industry-recognized certifications for enhanced
							employability.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
