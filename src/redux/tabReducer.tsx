import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface queryValue {
	title: string;
	api: string;
	command: string;
}

interface tabValue {
	// TODO: id system can be alpha numeric
	id: number;
	title: string;
	query: queryValue;
}

interface tabState {
	total: number;
	totalTab: number;
	active: number;
	tabs: tabValue[];
}

// Define the initial state using that type
const initialState: tabState = {
	total: 1,
	totalTab: 1,
	active: 1,
	tabs: [
		{
			id: 1,
			title: "new tab",
			query: {
				title: "SELECT",
				command: "",
				api: "https://dummyjson.com/users?limit=23&skip=0",
			},
		},
	],
};

export const tableSlice = createSlice({
	name: "selectTabs",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		addTab: (state, action) => {
			const { id, title, query } = action.payload;
			const tab: any = {
				id,
				title,
				query,
			};
			state.tabs.push(tab);
			state.totalTab += 1;
			state.active = id;
		},
		deleteTab: (state, action) => {
			const newState: tabState = { ...state };
			const a = newState.tabs.filter((tab) => tab.id !== action.payload);
			const newStateCopy = { ...newState, tabs: a };
			newStateCopy.totalTab -= 1;
			newStateCopy.active = newStateCopy.tabs ? newStateCopy.tabs[0].id : 1;
			return newStateCopy;
		},
		setActive: (state, action) => {
			const newState: tabState = { ...state };
			newState.active = action.payload;
			return newState;
		},
		editTab: (state, action) => {
			const { id, title, query } = action.payload;
			const tab: tabValue | undefined = state.tabs.find((tab) => tab.id === id);
			if (tab !== undefined) {
				tab.title = title;
				tab.query = query;
			}
		},
	},
});

export const { addTab, editTab, deleteTab, setActive } = tableSlice.actions;
export const selectTabs = (state: RootState) => state.tabs;

export default tableSlice.reducer;
