import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { EditForm } from './edit-task';


describe('EditForm component', () => {
  const mockData={
    id: "1",
    title: "Test Title",
    description: "Test Description",
    status: {
      id: "12",
      title: "Process"
    }
  }
  it('should render form fields correctly', () => {
    render(
      <Provider store={store}>
        <EditForm onClose={() => { }} task={mockData} />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Enter a task title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter a task description')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add Task' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });
});
