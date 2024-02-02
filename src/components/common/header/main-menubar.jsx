import { config } from "@/helpers/config";
import React from "react";
import Logo from "./logo";
import MainMenu from "./main-menu";

const MainMenubar = () => {
	return (
		<nav className="navbar navbar-expand-lg  bg-body-tertiary sticky-top">
			<div className="container">
				<Logo />
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="offcanvas offcanvas-end"
					tabIndex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div className="offcanvas-header">
						<h5
							className="offcanvas-title"
							id="offcanvasNavbarLabel"
						>
							<Logo />
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div className="offcanvas-body">
						<MainMenu className="navbar-nav justify-content-center flex-grow-1 pe-3" />

						<a
							href={`tel:${config.contact.phone1}`}
							className="btn btn-outline-secondary"
						>
							CALL NOW !
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default MainMenubar;
