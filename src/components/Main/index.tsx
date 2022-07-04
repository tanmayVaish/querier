import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	Snackbar,
	Alert,
} from "@mui/material";
import DataTable from "./DataTable";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { editTab } from "../../redux/tabReducer";

const Main = () => {
	const mockQuery = ["JOIN", "CREATE", "SELECT"];

	const queryApi: any = {
		JOIN: "https://dummyjson.com/users?limit=15&skip=0",
		CREATE: "https://dummyjson.com/users?limit=25&skip=0",
		SELECT: "https://dummyjson.com/users?limit=35&skip=0",
	};

	const tabState = useAppSelector((state) => state.tabs);

	const dispatch = useAppDispatch();

	useEffect(() => {
		tabState.tabs.forEach((tab) => {
			if (tab.id === tabState.active) {
				setQuery(tab.query.title);
				setCommand(tab.query.command);
			}
		});
	}, [tabState.active]);

	const [query, setQuery] = useState("SELECT");
	const [command, setCommand] = useState(query);
	const [snackbar, setSnackbar] = useState(false);

	useEffect(() => {
		handleCommandChange(query);
	}, [query]);

	const handleQueryChange = (value: string) => {
		setQuery(value);
	};

	const handleCommandChange = (value: string) => {
		setCommand(value);
	};

	const handleEdit = () => {
		tabState.tabs.forEach((tab) => {
			if (tab.id === tabState.active) {
				dispatch(
					editTab({
						id: tab.id,
						title: query,
						query: {
							title: query,
							command: command,
							api: queryApi[query],
						},
					}),
				);
			}
		});
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
					marginTop: "30px",
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
							handleQueryChange(e.target.value);
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
						value={command}
						onChange={(e) => handleCommandChange(e.target.value)}
						label="Query"
					/>
				</FormControl>
				<Button
					onClick={() => {
						handleEdit();
					}}
					variant={"contained"}
				>
					RUN
				</Button>
			</Box>
			<DataTable setSnackbar={setSnackbar} />
			<Snackbar
				open={snackbar}
				onClose={() => {
					setSnackbar(false);
				}}
				autoHideDuration={2000}
			>
				<Alert
					onClose={() => {
						setSnackbar(false);
					}}
					severity="success"
					sx={{ width: "100%" }}
				>
					Query Run Successfully
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default Main;
