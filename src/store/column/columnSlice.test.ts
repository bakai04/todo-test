import { v4 as uuidv4 } from 'uuid';
import columnSlice, { createColumn, editColumn } from './columnSlice'; // Import the columnSlice and its actions

describe('columnSlice', () => {
  let initialState = [
    {
      id: '1',
      title: 'Column 1',
    },
    {
      id: '2',
      title: 'Column 2',
    },
  ];

  beforeEach(() => {
    initialState = [
      {
        id: '1',
        title: 'Column 1',
      },
      {
        id: '2',
        title: 'Column 2',
      },
    ];
  });

  it('should handle createColumn correctly', () => {
    const newColumn = {
      id: uuidv4(),
      title: 'New Column',
    };

    const nextState = columnSlice.reducer(initialState, createColumn(newColumn));

    expect(nextState).toEqual([...initialState, newColumn]);
  });

  it('should handle editColumn correctly', () => {
    const editedColumn = {
      id: '1',
      title: 'Updated Column',
    };

    const nextState = columnSlice.reducer(initialState, editColumn(editedColumn));

    expect(nextState).toEqual([
      {
        id: '1',
        title: 'Updated Column',
      },
      {
        id: '2',
        title: 'Column 2',
      },
    ]);
  });
});
