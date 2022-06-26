import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from './store'

interface tabValue {
    id: number,
    title: string,
    query: string,
}

interface tabState {
    total: number
    totalTab: number,
    active: number,
    tabs: Array<tabValue>
}

// Define the initial state using that type
const initialState: tabState = {
    total: 1,
    totalTab: 1,
    active: 1,
    tabs: [
        {
            id: 1,
            title: "SELECT",
            query: "",
        },
    ],
}

export const tableSlice = createSlice({
    name: 'selectTabs',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addTab: (state, action) => {
            const {id, title, query} = action.payload;
            const tab = {
                id,
                title,
                query,
                isDeleted: false,
            };
            state.tabs.push(tab);
            state.total += 1;
            state.totalTab += 1;
            state.active = id;
        },
        deleteTab: (state, action) => {
            state.tabs.filter((tab) => tab.id !== action.payload);
            state.totalTab -= 1;
            state.active = state.tabs ? state.tabs[0].id : 1;
        },
        setActive: (state, action) => {
            state.active = action.payload;
        },
        editTab: (state, action) => {
            const {id, title, query} = action.payload;
            const tab: tabValue | undefined = state.tabs.find((tab) => tab.id === id);
            if (tab !== undefined) {
                tab.title = title;
                tab.query = query;
            }
        },
    }
})

export const {addTab, editTab, deleteTab, setActive} = tableSlice.actions
export const selectTabs = (state: RootState) => state.tabs

export default tableSlice.reducer
