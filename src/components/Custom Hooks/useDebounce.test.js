import { renderHook, act } from '@testing-library/react';
import useDebounce from './useDebounce';

vi.useFakeTimers()

test('debounces the value', () => {
  const { result, rerender } = renderHook(
    ({ value }) => useDebounce(value, 500),
    { initialProps: { value: 'a' } }
  );


  expect(result.current).toBe('a')

  rerender({ value: 'ab' })

  act(() => {
    vi.advanceTimersByTime(400)
  })

  expect(result.current).toBe('a')

  act(() => {
    vi.advanceTimersByTime(100)
  })

  expect(result.current).toBe('ab')
})