import Link from "next/link";
import React from "react";
import userMenuData from "@/helpers/data/user-menu.json";
import { auth } from "@/auth";

const DashboardNavigation = async () => {
	const session = await auth();
	const userRole = session.user.role.toLowerCase();
	const userMenu = userMenuData[userRole];

	return (
		<div className="container">
			<div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-lg-3">
				{userMenu.map((item) => (
					<div className="col" key={item.link}>
						<Link
							href={item.link}
							className="btn btn-outline-secondary w-100 h-100"
						>
							{item.title}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default DashboardNavigation;
