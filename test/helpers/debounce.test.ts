import { debounce } from '../../src/helpers/debounce';

test('the function should be called after the delay', () => {
  jest.useFakeTimers();
  const callback = jest.fn();
  const debounced = debounce(1000);

  debounced(callback);
  expect(callback).not.toBeCalled();

  jest.runAllTimers();
  expect(callback).toBeCalled();
});

test('the previous call should be canceled with in the delay', async () => {
  jest.useFakeTimers();
  const callback = jest.fn();
  const debounced = debounce(1000);

  debounced(callback);
  debounced(callback);

  jest.advanceTimersByTime(1000);
  debounced(callback);
  debounced(callback);

  jest.runAllTimers();
  expect(callback).toBeCalledTimes(2);
});
