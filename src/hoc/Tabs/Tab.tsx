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
							padding: "8px",
							boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
							border: "1px dashed #000",
							borderTopRightRadius: "20px",
							borderTopLeftRadius: "20px",
							minWidth: "150px",
					  }
					: {
							display: "flex",
							alignItems: "center",
							width: "250px",
							justifyContent: "space-between",
							padding: "8px",
							border: "1px dotted #8c8787",
							borderTopRightRadius: "20px",
							borderTopLeftRadius: "20px",
							color: "#8c8787",
							minWidth: "150px",
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
				sx={{
					cursor: "pointer",
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
