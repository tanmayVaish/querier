import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface tabValue {
	id: number;
	title: string;
	query: string;
	active: number;
}

interface tabState {
	total: number;
	totalTab: number;
	active: number;
	tabs: tabValue[];
}

// Define the initial state using that type
const initialState: tabState = {
	total: 2,
	totalTab: 2,
	active: 1,
	tabs: [
		{
			id: 1,
			title: "SELECT",
			query: "",
			active: 1,
		},
		{
			id: 2,
			title: "JOIN",
			query: "",
			active: 1,
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
			state.active = action.payload;
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
