import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
} from "@mui/material";
import DataTable from "./DataTable";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Main = () => {
	const mockQuery = ["JOIN", "CREATE", "SELECT"];

	const tabState = useAppSelector((state) => state.tabs);

	useEffect(() => {
		tabState.tabs.forEach((tab) => {
			if (tab.id === tabState.active) {
				setQuery(tab.query.title);
			}
		});
	}, [tabState.active]);

	const [query, setQuery] = useState("SELECT");

	const handleChange = (value: string) => {
		setQuery(value);
	};

	return (
		<Box
			sx={{
				padding: "50px",
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					gap: "10px",
				}}
			>
				<FormControl>
					<InputLabel id="demo-simple-select-label">Query</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={query}
						label="Query"
						onChange={(e) => {
							handleChange(e.target.value);
						}}
					>
						{mockQuery.map((item, ind) => (
							<MenuItem key={ind} value={item}>
								{item}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor="component-outlined">Type</InputLabel>
					<OutlinedInput
						sx={{ minWidth: "900px" }}
						id="component-outlined"
						// value={name}
						// onChange={handleChange}
						label="Query"
					/>
				</FormControl>
				<Button variant={"contained"}>RUN</Button>
			</Box>
			<DataTable />
		</Box>
	);
};

export default Main;
