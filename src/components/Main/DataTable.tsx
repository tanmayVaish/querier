import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "firstName", headerName: "First name", width: 130 },
	{ field: "lastName", headerName: "Last name", width: 130 },
	{
		field: "age",
		headerName: "Age",
		type: "number",
		width: 90,
	},
	{
		field: "fullName",
		headerName: "Full name",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		valueGetter: (params: GridValueGetterParams) =>
			`${params.row.firstName || ""} ${params.row.lastName || ""}`,
	},
	{ field: "username", headerName: "User Name", width: 130 },
	{ field: "university", headerName: "University", width: 260 },
	{ field: "email", headerName: "Email", width: 200 },
	{ field: "phone", headerName: "Phone No.", width: 150 },
];

export default function DataTable({ setSnackbar }: any) {
	const [data, setData] = useState({ data: { users: [] } });

	const fetchData = async () => {
		if (api !== "") {
			const data = await axios.get(api);
			setData(data);
		}
	};

	const tabState = useAppSelector((state) => state.tabs);

	const [api, setApi] = useState("");

	useEffect(() => {
		tabState.tabs.forEach((tab) => {
			if (tab.id === tabState.active) {
				setApi(tab.query.api);
			}
		});
	}, [tabState]);

	useEffect(() => {
		fetchData().then(() => {
			setSnackbar(true);
		});
	}, [api]);

	return (
		<div style={{ height: 535, width: "100%" }}>
			{data.data && (
				<DataGrid
					rows={data.data.users}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[10]}
					checkboxSelection
				/>
			)}
		</div>
	);
}
