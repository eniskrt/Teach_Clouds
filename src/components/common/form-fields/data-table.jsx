import Link from "next/link";
import React from "react";

export const Column = ({ title }) => {
	return <th scope="col">{title}</th>;
};

const Row = ({ children }) => {
	return <tr className="">{children}</tr>;
};

const Cell = ({ children }) => {
	return <td>{children}</td>;
};

const NoRecordFound = ({ colLength }) => {
	return (
		<tr>
			<td colSpan={colLength}>No records found</td>
		</tr>
	);
};

const FirstPageButton = ({ pageNumber }) => {
	return (
		<li className="page-item">
			<Link
				className={`page-link ${pageNumber ? "" : "disabled"} `}
				href="?page=0"
				aria-label="Previous"
			>
				<span aria-hidden="true">&laquo;</span>
			</Link>
		</li>
	);
};

const PageButton = ({ totalPages, pageNumber }) => {
	return [...new Array(totalPages)].map((_, index) => (
		<li className="page-item" key={index} aria-current="page">
			<Link
				className={`page-link ${
					pageNumber === index ? "disabled" : ""
				}`}
				href={`?page=${index}`}
			>
				{index + 1}
			</Link>
		</li>
	));
};

const LastPageButton = ({ totalPages, pageNumber }) => {
	return (
		<li className="page-item">
			<Link
				className={`page-link ${
					pageNumber >= totalPages - 1 ? "disabled" : ""
				}`}
				href={`?page=${totalPages - 1}`}
				aria-label="Next"
			>
				<span aria-hidden="true">&raquo;</span>
			</Link>
		</li>
	);
};

const Pagination = ({ totalPages, pageNumber, pageSize }) => {
	if (totalPages <= 1) return null;

	return (
		<nav
			aria-label="Page navigation"
			className="d-flex justify-content-center "
		>
			<ul className="pagination">
				<FirstPageButton pageNumber={pageNumber} />

				<PageButton pageNumber={pageNumber} totalPages={totalPages} />

				<LastPageButton
					pageNumber={pageNumber}
					totalPages={totalPages}
				/>
			</ul>
		</nav>
	);
};

const DataTable = ({
	title,
	dataSource,
	dataKey,
	pagination,
	totalPages,
	pageNumber,
	pageSize,
	children,
}) => {
	// children korumali bir prop oldugu icin uzerinde degisiklik yapmaya izin vermez
	// degisiklik yapabilmek icin kopyasini olusturduk

	if (!dataSource) throw new Error("dataSource attribute is required");
	if (!Array.isArray(dataSource))
		throw new Error("dataSource value must be an array");
	if (!dataKey) throw new Error("dataKey attribute is required");

	const columns = [...children];

	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-title">{title}</h3>

				<div className="table-responsive">
					<table className="table table-striped ">
						<thead>
							<tr>
								{columns.map((item) => (
									<Column
										key={item.props.title}
										{...item.props}
									/>
								))}
							</tr>
						</thead>
						<tbody>
							{dataSource.length <= 0 ? (
								<NoRecordFound colLength={columns.length} />
							) : null}

							{dataSource.map((row, indexRow) => {
								//console.log(row);
								return (
									<Row key={`row-${row[dataKey]}`}>
										{columns.map((column) => {
											const {
												field,
												index,
												title,
												template,
											} = column.props;
											let cellData = "";

											if (index) {
												cellData =
													pageSize * pageNumber +
													indexRow +
													1;
											} else if (field) {
												cellData = row[field];
											} else if (template) {
												if (
													typeof template !==
													"function"
												) {
													throw new Error(
														"template prop must be a function"
													);
												}

												cellData = template(row);
											}

											return (
												<Cell
													key={`col-${row[dataKey]}-${title}`}
												>
													{cellData}
												</Cell>
											);
										})}
									</Row>
								);
							})}
						</tbody>
					</table>
				</div>
				{pagination ? (
					<Pagination
						totalPages={totalPages}
						pageNumber={pageNumber}
						pageSize={pageSize}
					/>
				) : null}
			</div>
		</div>
	);
};

export default DataTable;
