// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Проверьте, что айди в респонсе === 201
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
const baseUrl = "https://jsonplaceholder.typicode.com/todos"

async function createTodo (thisBody) {
    try {
        const response = await fetch(baseUrl, {
            method: "post",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(thisBody)
        }
            )
        if (response.status !== 201) {
            throw new Error(`Is not available, recieved ${response.status} status`)
        }

        const body = await response.json()
        if (body.id !== 201) {
            throw new Error('Invalid id')
        }

        return body
        
    } catch (error) {
        console.error(error)
    } finally {
        console.log('Работа функции завершена')
    }
}
user = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
createTodo(user).then(result => console.log(result))
