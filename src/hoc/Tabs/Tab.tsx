import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTab, setActive } from "../../redux/tabReducer";

const Tab = ({ item }: TabProps) => {
	const dispatch = useAppDispatch();

	const removeTabHandler = (ind: number) => {
		dispatch(deleteTab(ind));
	};

	const activeTabHandler = (ind: number) => {
		dispatch(setActive(ind));
	};
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				width: "250px",
				justifyContent: "space-between",
				backgroundColor: "#0CDB94",
				color: "#FFFFFF",
				padding: "5px",
			}}
		>
			<Box>
				{item.title} {item.id}
			</Box>
			<Box onClick={() => removeTabHandler(item.id)}>❌</Box>
		</Box>
	);
};

type TabProps = {
	item: {
		id: number;
		title: string;
	};
};

export default Tab;
