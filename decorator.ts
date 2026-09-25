function LogClass(target: Function) {
    console.log(`Class decorator applied to: ${target.name}`);
}

@LogClass
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person("John");
console.log(person.name);