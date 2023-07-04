import tasksSlice, { createTask, editTask, changeTaskStatus, deleteTask } from './tasksSlice';

describe('tasksSlice', () => {
  let initialState= {
    column1: [
      {
        id: '1',
        title: 'Task 1',
        createdAt: null,
        description: 'Task 1 description',
        status: {
          id: 'column1',
          title: 'Column 1',
        },
      },
    ],
    column2: [
      {
        id: '2',
        title: 'Task 2',
        createdAt: null,
        description: 'Task 2 description',
        status: {
          id: 'column2',
          title: 'Column 2',
        },
      },
    ],
  };;

  beforeEach(() => {
    initialState = {
      column1: [
        {
          id: '1',
          title: 'Task 1',
          createdAt: null,
          description: 'Task 1 description',
          status: {
            id: 'column1',
            title: 'Column 1',
          },
        },
      ],
      column2: [
        {
          id: '2',
          title: 'Task 2',
          createdAt: null,
          description: 'Task 2 description',
          status: {
            id: 'column2',
            title: 'Column 2',
          },
        },
      ],
    };
  });

  it('should handle createTask correctly', () => {
    const newTask = {
      title: 'New Task',
      description: 'New Task description',
    };
    const column = {
      id: 'column1',
      title: 'Column 1',
    };

    const nextState = tasksSlice.reducer(initialState, createTask({ newTask, column }));

    expect(nextState.column1.length).toBe(2);
    expect(nextState.column1[1].title).toBe('New Task');
    expect(nextState.column1[1].description).toBe('New Task description');
    expect(nextState.column1[1].status).toEqual(column);
    expect(nextState.column1[1].id).toBeDefined();
    expect(nextState.column1[1].createdAt).toBeDefined();
  });

  it('should handle editTask correctly', () => {
    const editedTask = {
      id: '1',
      title: 'Updated Task',
      description: 'Updated Task description',
      status: {
        id: 'column1',
        title: 'Column 1',
      },
    };

    const nextState = tasksSlice.reducer(initialState, editTask(editedTask));

    expect(nextState.column1.length).toBe(1);
    expect(nextState.column1[0].title).toBe('Updated Task');
    expect(nextState.column1[0].description).toBe('Updated Task description');
    expect(nextState.column1[0].status).toEqual({
      id: 'column1',
      title: 'Column 1',
    });
    expect(nextState.column1[0].id).toBe('1');
    expect(nextState.column1[0].createdAt).toBeNull();
  });

  it('should handle changeTaskStatus correctly', () => {
    const task = {
      id: '1',
      title: 'Task 1',
      createdAt: null,
      description: 'Task 1 description',
      status: {
        id: 'column1',
        title: 'Column 1',
      },
    };
    const nextColumn = {
      id: 'column2',
      title: 'Column 2',
    };

    const nextState = tasksSlice.reducer(initialState, changeTaskStatus({ task, nextColumn }));

    expect(nextState.column1.length).toBe(0);
    expect(nextState.column2.length).toBe(2);
    expect(nextState.column2[1].title).toBe('Task 1');
    expect(nextState.column2[1].description).toBe('Task 1 description');
    expect(nextState.column2[1].status).toEqual(nextColumn);
    expect(nextState.column2[1].id).toBe('1');
    expect(nextState.column2[1].createdAt).toBeNull();
  });

  it('should handle deleteTask correctly', () => {
    const taskToDelete = {
      id: '1',
      title: 'Task 1',
      createdAt: null,
      description: 'Task 1 description',
      status: {
        id: 'column1',
        title: 'Column 1',
      },
    };

    const nextState = tasksSlice.reducer(initialState, deleteTask(taskToDelete));

    expect(nextState.column1.length).toBe(0);
  });
});
