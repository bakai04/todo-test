import { columns } from "@/store/column/columnSlice";
import { createMockStore } from "@/store/mock-store/create-redux-store";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { TaskList } from './task-list'; 

describe('TaskList', () => {
  it('should render the columns and CreateColumn component', () => {
    render(
      <Provider store={createMockStore({})}>
        <TaskList />
      </Provider>
    );

    screen.debug()
    const columnElements = screen.getAllByTestId('column');
    expect(columnElements).toHaveLength(columns.length);
  
    const createColumnElement = screen.getByTestId('create-column');
    expect(createColumnElement).toBeInTheDocument();
  });
});
