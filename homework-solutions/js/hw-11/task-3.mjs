class Employee {
  #salary;
  constructor(firstName, lastName, salary, profession) {
      this.firstName = firstName;//
      this.lastName = lastName;
      this.#salary = salary;
      this.profession = profession;
  }
  getFullName() {
      return `${this._firstName} ${this._lastName}`
  }
//firstName
  get firstName() {
      return this._firstName
  }

  set firstName(value) {
      if (typeof value !== 'string' ||  value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value)) {
          throw new Error(`${value} is invalid input`)
      }
      this._firstName = value
  }
//lastName
  get lastName() {
      return this._lastName
  }

  set lastName(value) {
      if (typeof value !== 'string' ||  value.length < 2 || value.length > 50 || !/^[a-zA-Z]+$/.test(value)) {
          throw new Error(`${value} is invalid input`)
      }
      this._lastName = value
  }
//profession      
  get profession() {
      return this._profession
  }

  set profession(value) {
      if (!isNaN(value) || typeof value !== 'string' || !/^[a-zA-Z ]+$/.test(value)){
          throw new Error(`${this._firstName}, find job, korzinochka`);
      }
      this._profession = value
  }
//salary    
  get salary() {
      return this.#salary
  }

  set salary(value) {
      if (isNaN(value) || value <= 0 || value >= 10000 || typeof value !== 'number'){
          throw new Error(`${this._firstName}, registration code for autorize in work account in OnlyFans send to your phone`)
      }
      this.#salary = value;
  }
}
class Developer extends Employee {
  constructor (firstName, lastName, salary, programmingLanguages = [], profession = 'Developer') {
      super(firstName, lastName, salary, profession)
      this.programmingLanguages = programmingLanguages;
  }
      addProgrammingLanguage(language) {
        if (typeof language !== 'string' || language.trim() === '') {
          throw new Error(`${language} is not valid input`);
        }    
        if (!this.programmingLanguages.includes(language)) {
              this.programmingLanguages.push(language)
        } 
  }
}
class Manager extends Employee {
  constructor (firstName, lastName, salary, teamSize, profession = 'Manager') {
      super(firstName, lastName, salary, profession)
      this.teamSize = teamSize;
  }
      increaseTeamSize() {
          return ++this.teamSize
      }
}
class Designer extends Employee {
  constructor (firstName, lastName, salary, designTools = [], profession = 'Designer') {
      super(firstName, lastName, salary, profession)
      this.designTools = designTools;
  }
      addDesignTool(tool){
        if (typeof tool !== 'string' || tool.trim() === '') {
          throw new Error(`${tool} have to be a string`);
        }

        if (!this.designTools.includes(tool)) {
              this.designTools.push(tool)
        } 
      }
}

class Company {
  #employees = [];
  constructor (title, phone, address){
      this._title = title;
      this._phone = phone;
      this._address = address;
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
      const duplicate = this.#employees.find((elem) => 
        elem.firstName === employee.firstName && elem.lastName === employee.lastName) 
      if (duplicate) {
        throw new Error(`${employee.firstName} ${employee.lastName} has already been added`)
      } else if (!(employee instanceof Employee)) {
        throw new Error(`${employee} is not instanceof class`)
  } 
  this.#employees.push(employee)
 }
   
  getEmployees() {
      return [...this.#employees]
  }

  getEmployeesByProfession(profession) {
    return this.#employees.filter((name) => name.profession === profession)
  }

}

// export { Employee, Company, Designer, Developer, Manager };

// const company = new Company('RZD filial', '123-456', 'Main Street');

// const emp1 = new Developer('John', 'Doe', 3000, ['JS'] )
// const emp2 = new Developer('Joh', 'Doe', 6000, ['JS'] )
// const manag1 = new Manager('Maria', 'Frolowa', 2500, 2)
// const designer1 = new Designer('Diana', 'White', 75000, ['Pencil'])

// company.addEmployee(emp1);
// company.addEmployee(emp2);
// company.addEmployee(manag1);
// company.addEmployee(designer1);

// console.log(emp1.salary)

// const developers = company.getEmployeesByProfession('Developer');
// const managers = company.getEmployeesByProfession('Manager');
// const designers = company.getEmployeesByProfession('Designer');

// console.log(company.getEmployees())
// console.log(developers)




