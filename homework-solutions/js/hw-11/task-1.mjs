class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._profession = profession;
      this.#salary = salary;
  }

  getFullName() {
      return `${this.firstName} ${this.lastName}`
  }

//firstName
  get firstName() {
      return this._firstName
  }

  set firstName(value) {
      if (typeof value !== 'string'|| value.length < 2) 
          throw new Error(`${this._firstName} is invalid input`)
       this._firstName = value
  }
//lastName
  get lastName() {
      return this._lastName
  }

  set lastName(value) {
      if (typeof value !== 'string' || value.length < 2) {
          throw new Error(`${this._lastName} is invalid input`)
      }
     this._lastName = value
  }
//profession      
  get profession() {
      return this._profession
  }

  set profession(value) {
      if (typeof value !== 'string' || value === 'Нет' || value === 'Безработный'){
          throw new Error(`${this._firstName}, find job, korzinochka`);
      }
     this._profession = value
  }
//salary    
  get salary() {
      return this.#salary
  }

  set salary(value) {
      if (typeof value !== 'number' || value < 100)
          throw new Error(`${this._firstName}, registration code for autorize in work account in OnlyFans send to your phone`)
       this.#salary = value;
  }

}

const Employee1 = new Employee('Mary','Wizard','Clown', 500)
console.log(Employee1.getFullName())
const Employee2 = new Employee('Okun', 'With Love','Free', 100)
console.log(Employee2.getFullName())
const Employee3 = new Employee('Java', 'Script', 'Student', 1000)
console.log(Employee3.getFullName())



class Company {
  #employees;
  constructor (title, phone, address, employees = []) {
      this._title = title;
      this._phone = phone;
      this._address = address;
      this.#employees = employees;
  }

// title
  get title() {
      return this._title
  }

// phone
  get phone() {
      return this._phone
  }

// address    
  get address() {
      return this._address
  }

  addEmployee(employee) {
      if (employee instanceof Employee) {
          this.#employees.push(employee)
      } else
      throw new Error(`Invalid object`)
  }
   
  getEmployees() {
      return this.#employees
  }

  getInfo() {
     return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}` 
  }
}

// const company = new Company('Tech Corp', 123456,'Main Street');
// const emp1 = new Employee({ firstName:'John', lastName: 'Doe', profession: 'Developer', salary: 3000 });
// const emp2 = new Employee({ firstName: 'Barbara', lastName: 'Johnson', profession: 'QA', salary: 2500 });
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// console.log(company.getEmployees())
// console.log(company.getInfo())


export { Employee, Company };

