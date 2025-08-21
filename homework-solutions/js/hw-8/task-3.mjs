/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
const arr = [1, 2, 3, 4]
function findMissingNumber(numbers) {

  if (numbers.length === 0) {
    throw new Error ("Wrong numbers")
  }
  const sortedArr = [...numbers].sort((a, b) => a-b)

  const sumOfNaturalNumbers = (sortedArr.length + 1)*((sortedArr.length + 1) + 1)/2
  
  const result = sortedArr.reduce((acc, el) => acc + el, 0)

  return  sumOfNaturalNumbers - result
}

export { findMissingNumber };
