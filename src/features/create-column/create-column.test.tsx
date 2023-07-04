import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ColumnForm, validationSchema } from './create-column';
import { Formik } from 'formik';
import { Provider } from "react-redux";
import store from "@/store/store";

describe('ColumnForm component', () => {
  it('should render the form with title field and buttons', () => {
    const { getByRole, getByTestId } = render(
      <Provider store={store}>
        <ColumnForm onClose={() => { }} />
      </Provider>
    );

    expect(getByTestId("column-title-input")).toBeInTheDocument();
    expect(getByRole('button', { name: 'Create Column' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('should show validation error when form is submitted with an invalid title', async () => {
    const { getByTestId, findByText, queryByText } = render(
      <Provider store={store}>
        <ColumnForm onClose={() => { }} />
      </Provider>
    );

    fireEvent.click(getByTestId("create-column"));
    expect(await findByText('Обязательное поле')).toBeInTheDocument();
    expect(queryByText('Название не должно превышать 100 символов')).toBeNull();
  });

  it('should call the onClose function when Cancel button is clicked', () => {
    const onCloseMock = jest.fn();

    const { getByTestId } = render(
      <Provider store={store}>
        <ColumnForm onClose={onCloseMock} />
      </Provider>);

    fireEvent.click(getByTestId("cancel"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
