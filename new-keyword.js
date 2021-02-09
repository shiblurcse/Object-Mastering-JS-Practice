//===new keyword, class and object difference===//
class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const newazPerson = new Person('Shiblur Rahman', 'Lipu', 20000);
console.log(newazPerson);
const friendlyPerson = new Person('Shiblur Rahman', 'Lipu', 25000);
console.log(friendlyPerson);