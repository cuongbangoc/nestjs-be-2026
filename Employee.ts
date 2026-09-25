import Person from "./Person.ts";

class Employee extends Person {
    private salary: number;

    constructor(id: string, name: string, age: number, salary: number) {
        super(id, name, age);
        this.salary = salary;
    }

    calculateSalary(): number {
        return this.salary;
    }

    calculateSalary(extraSalary: number): string {
        return this.salary + extraSalary + ' $';
    }

    sayHello(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am an employee and my salary is ${this.salary}.`);
    }
}

export default Employee;