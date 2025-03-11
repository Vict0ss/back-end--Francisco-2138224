function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function() {
    return `Hello ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");

console.log(person1.greet());
console.log(person2.greet());

Person.prototype.age = 0;

person1.age = 25;
console.log("Person1 Age:", person1.age);
console.log("Person2 Age:", person2.age);

Person.prototype.greet = function() {
    return `Hello ${this.firstName} ${this.lastName}, you are ${this.age} years old`;
};

console.log(person1.greet());
console.log(person2.greet());

console.log("Person1 __proto__:", person1.__proto__);
console.log("Same prototype:", person1.__proto__ === person2.__proto__);

