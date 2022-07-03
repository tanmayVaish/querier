import { Box } from "@mui/material";
import React, { useState } from "react";
import Tab from "./Tab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addTab } from "../../redux/tabReducer";

const Tabs = ({ children }: Props) => {
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
		<Box>
			<Box
				sx={{
					display: "flex",
					gap: "2px",
					width: "100%",
					boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
					padding: "2px",
				}}
			>
				{tabState.tabs.map((item, index) => (
					<Tab key={index} active={tabState.active} item={item} />
				))}
				<Box
					onClick={() => {
						addTabHandler();
					}}
				>
					+
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
