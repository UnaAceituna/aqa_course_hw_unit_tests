// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

// interface User <T, U> {
//     id: number;
//     name: string;
//     email: string;
//   }

// type UserKeys = keyof User

function getKeyByValue <T extends object> (obj: T, str: T[keyof T]): keyof T | undefined {
   for (const el in obj) {
    if (obj[el] === str) 
        return el
   }
}
const exampleObject = {
    name: "Alice",
    age: 30,
    city: "Saransk"
   };

console.log(getKeyByValue(exampleObject, 30))
