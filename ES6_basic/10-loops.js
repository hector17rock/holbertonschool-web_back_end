export default function appendToEachArrayValue(array, appendString) {
  for (let i = 0; i < array.length; i += 1) {
    const value = array[i];
    array[i] = appendString + value;
  }

  return array;
}
