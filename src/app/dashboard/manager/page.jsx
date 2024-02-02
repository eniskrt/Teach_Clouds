import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ManagerList from "@/components/dashboard/manager/manager-list";
import { getAllManagersByPage } from "@/services/manager-service";
import React from "react";

const ManagerPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllManagersByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Manager" />
			<Spacer height={50} />
            <ManagerList data={data}/>
			<Spacer />
		</>
	);
};

export default ManagerPage;
