import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import EditManagerForm from "@/components/dashboard/manager/edit-manager-form";
import { getManagerById } from "@/services/manager-service";
import React from "react";

const EditManagerPage = async ({ params }) => {
	const res = await getManagerById(params.id);
	const data = await res.json();
	if (!res.ok) {
		throw new Error(data.message);
	}


	return (
		<>
			<PageHeader title="Edit Manager" />
			<Spacer height={50} />
			<EditManagerForm data={data.object} />
			<Spacer />
		</>
	);
};

export default EditManagerPage;
