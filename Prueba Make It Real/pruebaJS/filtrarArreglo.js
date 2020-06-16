function filter(array) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray;
}

console.log(filter([1, 10, 3, 20, 3, 23]));
