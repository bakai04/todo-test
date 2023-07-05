import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CreateColumn } from './column-create';
import { createMockStore } from "@/store/mock-store/create-redux-store";
import { Provider } from "react-redux";

describe('CreateColumn', () => {
  it('should render without errors', () => {
    render(
      <Provider store={createMockStore({})}>
        <CreateColumn />
      </Provider>);
  });

  it('should toggle modal when clicked', () => {
    const { getByText, getByTestId } = render(
      <Provider store={createMockStore({})}>
        <CreateColumn />
      </Provider>)
    const createColumn = getByText('Добавить ещё одну колонку');

    fireEvent.click(createColumn);

    expect(getByTestId('backdrop')).toBeInTheDocument();
  });

  it('should close modal when onClose is called', () => {
    const { getByTestId, queryByText, getByText } = render(
      <Provider store={createMockStore({})}>
        <CreateColumn />
      </Provider>)
    const createColumn = getByText('Добавить ещё одну колонку');

    fireEvent.click(createColumn);
    expect(getByTestId('backdrop')).toBeInTheDocument();

    const closeButton = getByTestId('cancel');
    fireEvent.click(closeButton);

    expect(queryByText('ColumnForm')).not.toBeInTheDocument();
  });
});