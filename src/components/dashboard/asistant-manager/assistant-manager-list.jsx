import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import AssistantManagerToolbar from "./assistant-manager-toolbar";


const AssistantManagerList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <AssistantManagerToolbar row={row} />;
	};

	return (
		<div className="container">
			<Link
				href="/dashboard/assistant-manager/new"
				className="btn btn-primary mb-3"
			>
				New
			</Link>
			<DataTable
				title="Assistant Manager List"
				dataSource={content}
				dataKey="userId"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="First Name" field="name" />
				<Column title="Last Name" field="surname" />
				<Column title="Username" field="username" />
				<Column title="Tools" template={handleToolbar} />
			</DataTable>
		</div>
	);
};

export default AssistantManagerList;
