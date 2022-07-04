import { Box } from "@mui/material";
import React from "react";
import Tab from "./Tab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTab } from "../../redux/tabReducer";
import AddIcon from "@mui/icons-material/Add";

const Tabs = ({ children }: Props) => {
	const tabState = useAppSelector((state) => state.tabs);
	const dispatch = useAppDispatch();
	const addTabHandler = () => {
		dispatch(
			addTab({
				id: tabState.totalTab + 1,
				title: "new tab",
				query: { title: "SELECT", api: "https://dummyjson.com/users" },
			}),
		);
	};

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					gap: "2px",
					width: "100%",
					boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
					padding: "2px",
					position: "fixed",
				}}
			>
				{tabState.tabs.map((item, index) => (
					<Tab key={index} active={tabState.active} item={item} />
				))}
				<Box
					onClick={() => {
						addTabHandler();
					}}
					sx={{
						padding: "2px",
						cursor: "pointer",
						width: "100%",
					}}
				>
					<AddIcon />
				</Box>
			</Box>
			<Box>{children}</Box>
		</Box>
	);
};

type Props = {
	children: JSX.Element;
};

export default Tabs;
