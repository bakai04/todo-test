import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasksSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import columnSlice from "./columnSlice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    column: columnSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
