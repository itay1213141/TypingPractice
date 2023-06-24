export const average = (array: number[]) =>
  array.reduce((acc, val) => acc + val, 0) / array.length;
