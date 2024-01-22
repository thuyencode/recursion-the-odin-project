/**
 * @function Fibonacci
 * @description Function to return the N-th Fibonacci number.
 * @param {number} n - The input number
 * @return {number} - Return the N-th Fibonacci number
 * @see [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number)
 */
const fibonacciRecursion = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1);
};

const fibonacci = (n: number): number[] => {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(fibonacciRecursion(i));
  }

  return arr;
};

export default fibonacci;
