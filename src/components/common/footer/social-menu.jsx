import { config } from "@/helpers/config";
import React from "react";
import {
	TfiFacebook,
	TfiInstagram,
	TfiLinkedin,
	TfiTwitter,
	TfiYoutube,
} from "react-icons/tfi";
const SocialMenu = (props) => {
	return (
		<ul {...props}>
			<li className="nav-item">
				<a
					className="nav-link"
					href={config.contact.socialMedia.facebook}
					target="_blank"
				>
					<TfiFacebook /> Facebook
				</a>
			</li>

			<li className="nav-item">
				<a
					className="nav-link"
					href={config.contact.socialMedia.instagram}
					target="_blank"
				>
					<TfiInstagram /> Instagram
				</a>
			</li>

			<li className="nav-item">
				<a
					className="nav-link"
					href={config.contact.socialMedia.linkedin}
					target="_blank"
				>
					<TfiLinkedin /> Linkedin
				</a>
			</li>

			<li className="nav-item">
				<a
					className="nav-link"
					href={config.contact.socialMedia.twitter}
					target="_blank"
				>
					<TfiTwitter /> Twitter
				</a>
			</li>

			<li className="nav-item">
				<a
					className="nav-link"
					href={config.contact.socialMedia.youtube}
					target="_blank"
				>
					<TfiYoutube /> Youtube
				</a>
			</li>
		</ul>
	);
};

export default SocialMenu;
