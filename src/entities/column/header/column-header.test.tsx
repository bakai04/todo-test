import { columns } from "@/store/column/columnSlice";
import { createMockStore, mockTasks } from "@/store/mock-store/create-redux-store";
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from "react-redux";
import { ColumnHeader } from './column-header';

describe('ColumnHeader', () => {
  const mockColumnData = columns[0]
  const mockTasksLength = 5;
  const mockSetSearch = jest.fn();
  const mockSearch = 'search value';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the column title and tasks length', () => {
    render(
      <Provider store={createMockStore({})}>
        <ColumnHeader
          columnData={mockColumnData}
          tasksLength={mockTasksLength}
          setSearch={mockSetSearch}
          search={mockSearch}
        />
      </Provider>
    );

    const titleElement = screen.getByText(`${mockColumnData.title}(${mockTasksLength})`);

    expect(titleElement).toBeInTheDocument();
  });

  it('should render the search input when searchInputOpen is true', () => {
    render(
      <Provider store={createMockStore({})}>
        <ColumnHeader
          columnData={mockColumnData}
          tasksLength={mockTasksLength}
          setSearch={mockSetSearch}
          search={mockSearch}
        />
      </Provider>
    );

    const searchButton = screen.getByTestId('toggle-search-input');
    fireEvent.click(searchButton);

    const searchInput = screen.getByPlaceholderText('search');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('search value');
  });

  it('should call setSearch with an empty string and toggle searchInputOpen when search button is clicked', () => {
    render(
      <Provider store={createMockStore({})}>
        <ColumnHeader
          columnData={mockColumnData}
          tasksLength={mockTasksLength}
          setSearch={mockSetSearch}
          search={mockSearch}
        />
      </Provider>
    );

    const searchButton = screen.getByTestId('toggle-search-input');
    fireEvent.click(searchButton);

    expect(mockSetSearch).toHaveBeenCalledWith('');
    expect(mockSetSearch).toHaveBeenCalledTimes(1);
  });

  it('should call setSearch with the input value when the input value changes', () => {
    render(
      <Provider store={createMockStore({})}>
        <ColumnHeader
          columnData={mockColumnData}
          tasksLength={mockTasksLength}
          setSearch={mockSetSearch}
          search={mockSearch}
        />
      </Provider>
    );

    fireEvent.click(screen.getByTestId("toggle-search-input"))
    screen.debug();
    const searchInput = screen.getByPlaceholderText('search');
    fireEvent.change(searchInput, { target: { value: 'new search value' } });

    expect(mockSetSearch).toHaveBeenCalledWith('new search value');
    expect(mockSetSearch).toHaveBeenCalledTimes(2);
  });
});
