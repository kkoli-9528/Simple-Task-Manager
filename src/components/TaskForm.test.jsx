import { render, fireEvent } from '@testing-library/react'
import TaskForm from './TaskForm';

test('add task when form is submitted', () => {
  const mockSetTask = vi.fn();
  const { getByPlaceholderText, getByText } = render(
    <TaskForm setTask={mockSetTask} />
  );

  const input = getByPlaceholderText('New Task');
  fireEvent.change(input, { target: { value: 'Test Task' } })
  fireEvent.click(getByText('Add Task'))

  expect(mockSetTask).toHaveBeenCalled()
})