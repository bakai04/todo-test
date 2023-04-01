import { actualGetData } from "@/shared/lib";
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { columns, IColumn } from "./columnSlice";

export interface ITask {
  id: string;
  title: string;
  createdAt?: string | null;
  completedAt?: string | null;
  cancelledAt?:string | null;
  description: string;
  status: IColumn; 
}

type ColumnId = IColumn['id'];

export interface ITasks {
  [key:ColumnId]: ITask[]
}


const initialState: ITasks = {}
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {

    createTask: (state, { payload }) => {
      const { newTask, column} = payload
      if( state[column.id] ) {
        state[column.id] = [...state[column.id], { id: nanoid(), status: column, createdAt: actualGetData(), ...newTask }]
      } else {
        state[column.id] = [{ id: nanoid(), status: column, createdAt: actualGetData(), ...newTask }]
      }
    },

    changeTaskStatus: (state, { payload }) => {
      const { task, nextColumn } = payload;
      state[task.status.id] = state[task.status.id].filter((t) => t.id !== task.id);
      
      if (nextColumn && state[nextColumn.id]) {
        state[nextColumn.id] = [...state[nextColumn.id], {...task, status: nextColumn}];
      } else {
        state[nextColumn.id] = [{...task, status: nextColumn}];
      }
    },

    deleteTask: (state, { payload }) => {
      state[payload.status.id] = state[payload.status.id].filter((t) => t.id !== payload.id);
    },


    editTask: (state, { payload }) => { 
	  	state[payload.status.id] = state[payload.status.id].map((elem) => {
	  		if(elem.id === payload.id) {
	  			return {...elem, ...payload}
	  		}
	  		return elem;
	  	})
	  	return state
      },
    },
});


export const { createTask, editTask, changeTaskStatus, deleteTask} = tasksSlice.actions;
export default tasksSlice;
