import { createMockStore } from "@/store/mock-store/create-redux-store";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { TaskList } from './task-list';

describe('TaskList', () => {
  it('should render columns', () => {
    const { getAllByTestId, getByTestId } = render(
      <Provider store={createMockStore({})}>
        <TaskList />
      </Provider>
    );
    const columns = getAllByTestId("column");
    expect(columns.length).toBe(4);

    const createColumnModal = getByTestId("create-column-btn");
    expect(createColumnModal).toBeInTheDocument();
  });
});
