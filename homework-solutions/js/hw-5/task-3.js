/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

let vowels = 'a, e, i, o, u, y'
let consonants = "b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, z"
let totalVowels = 0
let totalConsonants = 0

for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase()
    if (vowels.includes(letter)) {
        totalVowels ++
    } else if (consonants.includes(letter)) {
        totalConsonants ++
    }
}     
vowelsAndConsonantsResult = `${word} contains ${totalVowels} vowels and ${totalConsonants} consonants`
//console.log(vowelsAndConsonantsResult)

export { vowelsAndConsonantsResult };