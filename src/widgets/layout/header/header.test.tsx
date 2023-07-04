import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './header';

describe('Header component', () => {
  it('should toggle visibility of input when title is clicked', async () => {
    render(<Header />);
    const title = screen.getByText('You can change title');
    fireEvent.click(title);
    expect(screen.getByPlaceholderText(/new title/i)).toBeInTheDocument();
  });

  it('should update the title when input value changes', async () => {
    render(<Header />);
    fireEvent.click(screen.getByText('You can change title'));
    const input = screen.getByPlaceholderText(/new title/i);
    
    fireEvent.change( input, { target: { value: 'New Title' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 })

    expect(screen.getByText('New Title')).toBeInTheDocument();
  });
});
