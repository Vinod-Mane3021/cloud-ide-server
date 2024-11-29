export const getRandomNumberIn = (num1: number, num2: number) => {
  return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};
