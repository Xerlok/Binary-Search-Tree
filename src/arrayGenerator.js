/* eslint-disable */
export default function generateArray(size) {
  const array = [];

  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 1000));
  }

  return array;
}
