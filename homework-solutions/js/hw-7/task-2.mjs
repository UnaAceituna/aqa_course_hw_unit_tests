/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string')
    return false
  let palindrome = word.split("").reverse().join("")
    return word.toLowerCase() === palindrome.toLowerCase()
}
console.log(isPalindrom(""))

//  2. findLongestWords()
//  Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
//  и возвращает слово с наибольшим количеством букв. 
//  Если таких слов несколько - возвращает их все.


function findLongestWords(sentence) {
  if ((typeof sentence !== 'string') || (sentence.trim().length < 1))
  return []

  const spletedSentence = sentence.split(" ")
  const getMaxLength = Math.max(...spletedSentence.map(letter => letter.length))
  let words = []

  for (const el of spletedSentence) {
    if (getMaxLength === el.length) {
      words.push(el)
    }
  }
  return words
}
  
export { isPalindrom, findLongestWords };