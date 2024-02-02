import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import AssistantManagerList from "@/components/dashboard/asistant-manager/assistant-manager-list";
import { getAllAssistantManagersByPage } from "@/services/assistant-manager-serice";
import React from "react";

const AssistantManagerPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllAssistantManagersByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Assistant Manager" />
			<Spacer height={50} />
            <AssistantManagerList data={data}/>
			<Spacer />
		</>
	);
};

export default AssistantManagerPage;
