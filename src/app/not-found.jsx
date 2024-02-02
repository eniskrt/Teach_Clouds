import Spacer from "@/components/common/spacer";
import NotFound from "@/components/errors/not-found";
import { headers } from "next/headers";
import React from "react";

const NotFoundPage = () => {

	return (
		<>
			<Spacer />
			<NotFound />
			<Spacer />
		</>
	);
};

export default NotFoundPage;
