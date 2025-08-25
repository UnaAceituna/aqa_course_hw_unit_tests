const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
// Объект должен иметь поля name (string) и age (number)

function addCharacter(character) {
  if (typeof character.name !== 'string' || typeof character.age !== 'number'){
    throw new Error('nooo')
  }
  characters.push({name: character.name, age: character.age})
  return characters
}

//2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }

function getCharacter(name) {
  return characters.find(value => value.name === name)
}

// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge 

function getCharactersByAge(minAge) {
  if (typeof minAge !== 'number') {
    throw new Error('not today')
  }
  return characters.filter(value => value.age >= minAge)
}


// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)

function updateCharacter(name, newCharacter) {
    const getData = getCharacter(name)
    if (!getData) {
      throw new Error('You recieved invalid data!')
    }
    getData.name = newCharacter.name ?? getData.name
    getData.age = newCharacter.age ?? newCharacter.age
    return characters
}

// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)

function removeCharacter(name) {
  const index = characters.findIndex(value => value.name === name)

  if (index === -1) {
    throw new Error('updateCharacter - not today')
  }
  characters.splice(index, 1)
  return characters
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
