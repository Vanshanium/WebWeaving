const meri_array = [1, 2, 3, 4, 5];

const doubles = meri_array.map(meri_array => meri_array * 3)

console.log(doubles); // This will log an array of undefined values because the arrow function does not return anything explicitly.