export default function sortArray(arr) {
  let array = arr;
  array = [...new Set(array)]; // remove duplicates
  return array.sort((a, b) => a - b);
}
