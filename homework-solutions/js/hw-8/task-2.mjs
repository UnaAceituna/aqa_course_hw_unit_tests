/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

//import { forEach } from "./task-1.mjs";

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

function countedVowels(letters) {
  return [...letters].filter(el => vowels.includes(el)).length
}

function sortedByVowels(words) {
  let sortedArr = words.sort((a,b) => countedVowels(a.toLowerCase()) - countedVowels(b.toLowerCase()))
  return sortedArr
}

export { sortedByVowels };
