import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface IColumn {
  id: string,
  title: string,
}

export const columns: IColumn[] = [
  {
    id: "new",
    title: "Новое",
  },
  {
    id: "inProgress",
    title: "В процессе",
  },
  {
    id: "onTesting",
    title: "Тестирование",
  },
  {
    id: "completed",
    title: "Завершённые",
  },
]

const columnSlice = createSlice({
  name: "column",
  initialState: columns,
  reducers: {

    createColumn: (state, { payload }) => {
      return [
        ...state,
        { id: uuidv4(), ...payload },
      ];
    },

    editColumn: (state, action) => { 
	  	state = state.map((elem) => {
	  		if(elem.id === action.payload.id) {
	  			return {...elem, ...action.payload}
	  		}
	  		return elem;
	  	})
	  	return state
      },
    },
});


export const { createColumn, editColumn } = columnSlice.actions;
export default columnSlice;
