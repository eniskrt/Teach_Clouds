import React from "react";
import { TfiUser } from "react-icons/tfi";
import LogoutBtn from "./logout-btn";
import userMenuData from "@/helpers/data/user-menu.json";
import Link from "next/link";

const UserMenuAuth = async ({ session }) => {
	const userRole = session.user.role.toLowerCase();
	const userMenu = userMenuData[userRole];

	return (
		<>
			<button
				className="btn btn-primary"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#Id2"
				aria-controls="Id2"
			>
				<TfiUser /> {session.user?.name}
			</button>

			<div
				className="offcanvas offcanvas-start"
				tabIndex="-1"
				id="Id2"
				aria-labelledby="staticBackdropLabel"
			>
				<div
					className="offcanvas-header bg-primary"
					style={{ height: "48px" }}
				>
					<h5 className="offcanvas-title" id="staticBackdropLabel">
						MENU
					</h5>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div className="offcanvas-body">
					<ul className="nav flex-column ">
						{userMenu.map((item) => (
							<li key={item.link} data-bs-dismiss="offcanvas">
								<Link className="nav-link" href={item.link}>{item.title}</Link>
							</li>
						))}
						<li data-bs-dismiss="offcanvas">
							<LogoutBtn />
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default UserMenuAuth;
