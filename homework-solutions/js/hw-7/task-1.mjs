/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/


function mergeArrays(...arr) {
  const array = []
  for (const el of arr) {
    array.push(...el)
  }
  return array
}
console.log(mergeArrays([1,2], [3,4], [5,6], [12,6]))


/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const newSentence = sentence.trim().split(" ")
  let res = ''
  
  for (const el of newSentence) {
    if (el !== ''){
      if (newSentence.indexOf(el) == 0){
    res += el.toLowerCase()
  }
   else  {
    res += "_" + el[0].toUpperCase() + el.slice(1).toLowerCase()
  }
}}
  return res
} 

console.log(devideBy('I am super engineer'))

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  let arr = [0, 1]
  if (typeof n !== "number" || n < 0) throw new Error("It won't help you")
  if (n < 2) {
    return n;
  } 
  for(let i = 2; i <= n; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr[n]
}

// console.log(fibonacci(9))
export { mergeArrays, fibonacci, devideBy };
