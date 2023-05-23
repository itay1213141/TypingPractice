import shuffle from "array-shuffle";

export const range = (length: number, start: number = 0) =>
  [...Array(length).keys()].map((i) => start + i);

export const pickRandomItems = <T>(array: T[], numOfItems: number = 1): T[] => {
  if (numOfItems > array.length) {
    throw new Error(
      `Can't pick ${numOfItems} from array with length ${array.length}`
    );
  }

  return shuffle(array).slice(0, numOfItems);
};
