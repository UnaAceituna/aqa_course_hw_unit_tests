/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/
const numbers = [0, -1, -1, 0, 0, -2];

function countOccurrences(arr) {
  const obj = arr.reduce(((acc, value) => {
    acc[value] = (acc[value] || 0) +1
    return acc
}), {})
return obj
}
console.log(countOccurrences(numbers))

export { countOccurrences };

