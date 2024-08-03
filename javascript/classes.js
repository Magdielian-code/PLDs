// classes in javascript

// FACTORY FUNCTION
// function declaration
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function ()  {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}

const John = createPerson("John", 30);
John.greet();

// class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// child class
class Student extends Person {
    constructor(name, age, level) {
        super(name, age);
        this.level = level;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am in ${this.level}`);
    }
}

const Mark = new Person("Mark", 30);
console.log(Mark.greet());
