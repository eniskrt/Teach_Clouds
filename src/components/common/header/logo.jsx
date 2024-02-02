import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ type = "multi" }) => {
	return (
		<Link className="navbar-brand" href="/" title={config.project.name}>
			<Image
				src={`/images/logo/logo-${type}.png`}
				width={208}
				height={48}
				alt={config.project.name}
			/>
		</Link>
	);
};

export default Logo;
