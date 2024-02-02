import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import EditAssistantManagerForm from "@/components/dashboard/asistant-manager/edit-assistant-manager-form";
import { getAssistantManagerById } from "@/services/assistant-manager-serice";
import React from "react";

const EditAssistantManagerPage = async ({ params }) => {
	const res = await getAssistantManagerById(params.id);
	const data = await res.json();
	if (!res.ok) {
		throw new Error(data.message);
	}


	return (
		<>
			<PageHeader title="Edit Assistant Manager" />
			<Spacer height={50} />
            <EditAssistantManagerForm data={data.object}/>
			<Spacer />
		</>
	);
};

export default EditAssistantManagerPage;
