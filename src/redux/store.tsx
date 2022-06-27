import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./tabReducer";

export const store = configureStore({
	reducer: {
		tabs: tabReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
