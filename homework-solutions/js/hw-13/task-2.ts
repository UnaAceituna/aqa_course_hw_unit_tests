// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.


function validatePassword(password: string): boolean {
    if (password.length < 8 && (password.trim().length === 0)) {
        return false
    } 
    const UpperCase = /[A-Z]/.test(password)
    const LowerCase = /[a-z]/.test(password)
    const digits = /\d/.test(password)

    return UpperCase && LowerCase && digits
    
}
console.log(validatePassword('  '))
console.log(validatePassword('TypeScript!'))
console.log(validatePassword('t1y2p3e4s5c6r7i8p9t'))
console.log(validatePassword('OneD1rection'))
console.log(validatePassword('GoOdPas123word'))
