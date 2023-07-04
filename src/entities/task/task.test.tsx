import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Task from './task';
import store from "@/store/store";
import { mockTasks } from "@/store/mock-store/create-redux-store";


describe('Task', () => {
  it('should render the task title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Task task={mockTasks[0]} />
      </Provider>
    );

    const titleElement = getByText(mockTasks[0].title);
    expect(titleElement).toBeInTheDocument();
  });


  it('should open the edit modal when "Edit" button is clicked', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Task task={mockTasks[0]} />
      </Provider>
    );

    const editButton = getByText('Edit');
    fireEvent.click(editButton);
    
    const modalElement = getByTestId('backdrop');
    expect(modalElement).toBeInTheDocument();
  });
});
