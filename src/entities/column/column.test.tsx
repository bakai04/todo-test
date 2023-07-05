import { columns } from "@/store/column/columnSlice";
import { createMockStore, mockTasks } from "@/store/mock-store/create-redux-store";
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Column } from './column';

describe('Column', () => {
  const mockColumnData = columns[0]

  it('should render the column header, content, and footer', () => {
    render(
      <Provider store={createMockStore({})}>
        <Column columnData={mockColumnData} />
      </Provider>
    );

    const columnHeader = screen.getByTestId('column-header');
    const columnContent = screen.getByTestId('column-content');
    const columnFooter = screen.getByTestId('column-footer');

    expect(columnHeader).toBeInTheDocument();
    expect(columnContent).toBeInTheDocument();
    expect(columnFooter).toBeInTheDocument();
  });
});
