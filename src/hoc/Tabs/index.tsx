import { Box } from "@mui/material";
import React, { useState } from "react";
import Tab from "./Tab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTab, tableSlice } from "../../redux/tabReducer";

const Tabs = () => {
	const tabState = useAppSelector((state) => state.tabs);
	const dispatch = useAppDispatch();
	const addTabHandler = () => {
		dispatch(
			addTab({
				id: tabState.totalTab + 1,
				title: "new tab",
			}),
		);
	};
	const [tabs, setTabs] = useState([
		{ title: "New Tab" },
		{ title: "New Tab" },
		{ title: "New Tab" },
	]);
	return (
		<Box
			sx={{
				display: "flex",
				gap: "2px",
			}}
		>
			{tabState.tabs.map((item, index) => (
				<Tab key={index} item={item} />
			))}
			<Box
				onClick={() => {
					addTabHandler();
				}}
			>
				+
			</Box>
		</Box>
	);
};

export default Tabs;
