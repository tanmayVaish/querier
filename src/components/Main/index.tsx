import Box from "@mui/material/Box";
import React, { useState } from "react";
import {
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
} from "@mui/material";
import DataTable from "./DataTable";

const Main = () => {
	const mockQuery = ["JOIN", "CREATE", "SELECT"];

	const [query, setQuery] = useState("SELECT");
	const handleChange = () => {
		setQuery("JOIN");
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
						onChange={handleChange}
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
			</Box>
			<DataTable />
		</Box>
	);
};

export default Main;
