/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string' || parseInt(word))
  return false
  let palindrome = word.split("").reverse().join("")
  if ((word.toLowerCase() == palindrome.toLowerCase())) {
    return true
  } else
  return false
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (parseInt(sentence) || (typeof sentence !== 'string') || (sentence.length < 1))
  return []

  let newSentence = sentence.split(" ")
  let newArr = Math.max(...newSentence.map(letter => letter.length))
  let words = []

  for (const el of newSentence) {
    if (newArr === el.length) {
      words.push(el)
    }
  }
  return words
}

export { isPalindrom, findLongestWords };
