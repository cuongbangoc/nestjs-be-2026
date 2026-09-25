import { add, sub, multiply, divide } from './mathUtils.ts';
import log from './mathUtils.ts';
import Employee from './Employee.ts';

const total = add(1, 2);
log(`Total: ${total}`);

const emp = new Employee("1", "John", 30, 1000);
console.log(emp.sayHello());
const salary: number = emp.calculateSalary(50);
console.log(salary);

console.log('Add more signup file');

console.log('Hotfix');