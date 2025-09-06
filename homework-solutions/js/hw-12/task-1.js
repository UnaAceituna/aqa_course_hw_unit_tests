// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function delayTwoSeconds () {
    setTimeout (() => {
        console.log('Я отработала за 2 секунды')
    }, 2000)
}

delayTwoSeconds()

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
const firstPromise = new Promise((res,rej) => {
    res(1)
})

firstPromise
    .then((message) => {
        console.log(message)
})

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
const secondPromise = new Promise ((res, rej) => {
    rej("Promise in third task failed")
})

secondPromise
    .catch((error) => {
        console.error(error)
    })


// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
const promiseNumber = (num) => {
    return new Promise ((res, rej) => {
        if (num >= 0) {
            res(num)
        } rej('Function from task 3 get invaid number')
    })
}

promiseNumber(-1)
    .then(message => {
        console.log(message)
})
    .catch(error => {
        console.error(error)
})

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(values => {
        values.map(el => console.log(el))
    })
    .catch(error => {
        console.log(error)
    })

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(values => {
        values.map(el => console.log(el))
    })

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

const arr = [promiseNumber(4), promiseNumber(5), promiseNumber(6)]

async function getPromiseAll () {
    try {
        const result1 = (await Promise.all(arr)).map((el) => console.log(el))
    }
        catch(error) {
        console.error(error.message)
    
}}

async function getPromisSettled () {
    try {
        const result2 = (await Promise.allSettled(arr)).map((el) => console.log(el))
    }
        catch(error) {
        console.error(error.message)
    
}}

getPromiseAll();
getPromisSettled();

