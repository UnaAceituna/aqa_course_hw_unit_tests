/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

*/

function getRandomArbitrary(min, max) {
  return  Math.floor(Math.random() * ((max + 1) - min) + min)
}

function uniqueRandomGenerator(n) {
  const saver = []
  return () => {
    let num = 1;
  if (saver.length >= n) {
      return 'All numbers were received'
  }
 while (saver.includes(num)) {
      num = getRandomArbitrary(1, n)
    }
    saver.push(num)
    return num

  
  } 
}


const uniqueRandomGeneratorCaller = uniqueRandomGenerator(5)

console.log(uniqueRandomGeneratorCaller())
console.log(uniqueRandomGeneratorCaller())
console.log(uniqueRandomGeneratorCaller())
console.log(uniqueRandomGeneratorCaller())
console.log(uniqueRandomGeneratorCaller())
console.log(uniqueRandomGeneratorCaller())
console.log(uniqueRandomGeneratorCaller())
console.log(uniqueRandomGeneratorCaller())

export { uniqueRandomGenerator };
