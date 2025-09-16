function getAvgSalary<T extends {salary: number}>(...arr: T[]): number {
    const avgSalary = arr.reduce((acc, el) => acc + el.salary, 0)
    return avgSalary/arr.length
}

const arr = [
    {name: "Jane", lastname: "Grok", job: true, salary: 650},
    {name: "Mary", job: true, salary: 1300},
    {name: "Joe", job: false, salary: 1200},
    {name: "Kayla", job: true, salary: 1400},
]
const avgSalary = getAvgSalary(...arr)
console.log(avgSalary)
