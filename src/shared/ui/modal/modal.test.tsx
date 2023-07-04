import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './modal';

describe('Modal component', () => {
  it('should call onClose when clicking outside the modal content', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal onClose={onCloseMock}>
        <div>Modal content</div>
      </Modal>
    );

    fireEvent.mouseDown(screen.getByTestId('backdrop'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
