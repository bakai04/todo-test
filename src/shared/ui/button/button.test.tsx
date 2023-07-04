import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button component', () => {
  it('should render children correctly', () => {
    const buttonText = 'Click me';
    const { getByText } = render(<Button>{buttonText}</Button>);

    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it('should call onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);

    const button = getByText('Click me');
    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('should have correct styles based on type and variant props', () => {
    const { container } = render(<Button type="primary">Primary Button</Button>);
    const button = container.firstChild;
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('primary');
  });
});
