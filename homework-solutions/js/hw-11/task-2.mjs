class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
      this.firstName = firstName;//
      this.lastName = lastName;
      this.profession = profession;
      this.#salary = salary;
  }

  getFullName() {
      return `${this._firstName} ${this._lastName}`
  }

//firstName
  get firstName() {
      return this._firstName
  }

  set firstName(value) {
      if (typeof value !== 'string' ||  value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value) ) {
          throw new Error(`${value} is invalid input`)
      }
       this._firstName = value
  }
//lastName
  get lastName() {
      return this._lastName
  }

  set lastName(value) {
      if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value) ) {
          throw new Error(`${value} is invalid input`)
      }
      return this._lastName = value
  }
//profession      
  get profession() {
      return this._profession
  }

  set profession(value) {
      if (!isNaN(value) || typeof value !== 'string' || !/^[a-zA-Z ]+$/.test(value)){
          throw new Error(`${this._firstName}, find job, korzinochka`);
      }
      return this._profession = value
  }
//salary    
  get salary() {
      return this.#salary
  }

  set salary(value) {
      if (isNaN(value) || value <= 0 || value >= 10000 || typeof value !== 'number'){
          throw new Error(`registration code for autorize in work account in OnlyFans send to your phone`)
      }
      return this.#salary = value;
  }

}

class Company {
  #employees;
  constructor (title, phone, address, employees = []) {
      this._title = title;
      this._phone = phone;
      this._address = address;
      this.#employees = employees
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
// find employee
  findEmployeeByName(firstName) {
      const getEmployee = this.#employees.find(el => el.firstName === firstName )
      if (!getEmployee) {
          throw new Error(`Invalid name`)
      }
      return getEmployee
  }
//removing
  removeEmployee(firstName) {  
    const indexOfRemovingEmployee = this.#getEmployeeIndex(firstName)     
      if (indexOfRemovingEmployee === -1) {
          throw new Error(`No employee for removing`)
      } 
       this.#employees.splice(indexOfRemovingEmployee, 1)
  }
//private
  #getEmployeeIndex(firstName) {
      const idx = this.#employees.findIndex(el => el.firstName === firstName)
      return idx
  }
//sum salary
  getTotalSalary() {
      const sal = this.#employees.reduce((acc, value) => {
          acc += value.salary
          return acc
  }, 0)
      return sal
  }
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
// const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

// const company = new Company('Tech Corp', '123-456', 'Main Street');
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(emp3);

// console.log(emp1.getFullName())



export { Employee, Company };
