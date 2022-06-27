import { Box } from "@mui/material";
import React, { useState } from "react";
import Tab from "./Tab";
import { useAppSelector } from "../../redux/hooks";

const Tabs = () => {
	const tabState = useAppSelector((state) => state.tabs);

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
		</Box>
	);
};

export default Tabs;
