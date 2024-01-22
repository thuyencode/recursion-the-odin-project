import fibonacci from "./fibonacci";
import { mergeSort } from "./mergeSort";
import { getRandomArray, getRandomNumber } from "./utils";

console.group("Fibonacci number from 1 to maximum 20");
console.table(fibonacci(getRandomNumber(20)));
console.groupEnd();

console.group("Merge sort the random array of 100 elements");
console.table(mergeSort(getRandomArray()));
console.groupEnd();
