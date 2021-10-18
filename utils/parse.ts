export const parseInteger = (
  value: string,
  defaultValue: number = 1
): number => {
  const parsedValue = parseInt(value, 10);
  return isNaN(parsedValue) ? defaultValue : parsedValue;
};
