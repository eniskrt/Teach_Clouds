import Spacer from "@/components/common/spacer";
import UnAuthorized from "@/components/errors/unauthorized";
import React from "react";

const UnauthorizedPage = () => {
	return (
		<>
			<Spacer />
			<UnAuthorized />
			<Spacer />
		</>
	);
};

export default UnauthorizedPage;
