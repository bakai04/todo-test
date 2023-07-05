import { createMockStore, mockTasks } from "@/store/mock-store/create-redux-store";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import { ColumnContent } from './column-content';

describe('ColumnContent', () => {
  it('should render tasks', () => {

    render(
      <Provider store={createMockStore({})}>
        <ColumnContent tasks={mockTasks.new} />
      </Provider>
    );

    mockTasks.new.forEach((task) => {
      const taskElement = screen.getByText(task.title);
      expect(taskElement).toBeInTheDocument();
    });
  });

  it('should not render tasks when tasks array is empty', () => {
    render(
      <Provider store={createMockStore({})}>
        <ColumnContent tasks={[]} />
      </Provider>
    );

    const taskElements = screen.queryAllByTestId('task');
    expect(taskElements.length).toBe(0);
  });
});
