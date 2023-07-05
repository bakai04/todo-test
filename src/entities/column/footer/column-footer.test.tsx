import { columns } from "@/store/column/columnSlice";
import { createMockStore } from "@/store/mock-store/create-redux-store";
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { ColumnFooter } from './column-footer';

describe('ColumnFooter', () => {
  it('should render the "Добавить карточку" button', () => {
    render(<Provider store={createMockStore({})}><ColumnFooter columnData={columns[0]} /></Provider>);
    const addButton = screen.getByText('Добавить карточку');
    expect(addButton).toBeInTheDocument();
  });

  it('should open the task modal when the button is clicked', () => {
    render(<Provider store={createMockStore({})}><ColumnFooter columnData={columns[0]} /></Provider>);

    const addButton = screen.getByText('Добавить карточку');
    fireEvent.click(addButton);

    const modalTitle = screen.getByTestId('backdrop');
    expect(modalTitle).toBeInTheDocument();
  });

  it('should close the task modal when the modal is closed', () => {
    render(<Provider store={createMockStore({})}><ColumnFooter columnData={columns[0]} /></Provider>);

    const addButton = screen.getByText('Добавить карточку');
    fireEvent.click(addButton);

    const closeButton = screen.getByText('Cancel');
    fireEvent.click(closeButton);

    expect(screen.queryByTestId('backdrop')).not.toBeInTheDocument();
  });
});
