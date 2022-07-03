import { Box } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTab, setActive } from "../../redux/tabReducer";

const Tab = ({ item, active }: TabProps) => {
	const dispatch = useAppDispatch();

	const removeTabHandler = (ind: number) => {
		dispatch(deleteTab(ind));
	};

	const activeTabHandler = (ind: number) => {
		dispatch(setActive(ind));
	};
	return (
		<Box
			sx={
				active === item.id
					? {
							display: "flex",
							alignItems: "center",
							width: "250px",
							justifyContent: "space-between",
							padding: "5px",
							boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
					  }
					: {
							display: "flex",
							alignItems: "center",
							width: "250px",
							justifyContent: "space-between",
							padding: "5px",
					  }
			}
			onClick={() => {
				activeTabHandler(item.id);
			}}
		>
			<Box>
				{item.title} {item.id}
			</Box>
			<Box
				onClick={() => {
					console.log(item.id);
					removeTabHandler(item.id);
				}}
			>
				❌
			</Box>
		</Box>
	);
};

type TabProps = {
	item: {
		id: number;
		title: string;
	};
	active: number;
};

export default Tab;
