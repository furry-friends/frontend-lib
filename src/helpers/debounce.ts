const debounce = (delay: number): ((func: Function) => void) => {
  let timeoutId: number;

  return (fun: Function): void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fun, delay);
  };
};

export { debounce };
