import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./task/tasksSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import columnSlice from "./column/columnSlice";

export const rootReducer = combineReducers(
  {
    tasks: tasksSlice.reducer,
    column: columnSlice.reducer
  }
)

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
