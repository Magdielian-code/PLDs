const myObj = {
    name: 'John',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'writing', 'coding'],
    beverage: {
        morning: 'coffee',
        evening: 'juice'
    },
    action: function() {
        return `Time for ${this.beverage.evening}`;
    }
    
};

console.log(myObj.action());

const vehicle = {
    wheels: 4,
    engine: function() {
        return 'Vroom Vroom';
    }
}

const truck = Object.create(vehicle); 
truck.doors = 2;
console.log(truck.engine());

const car = Object.create(vehicle);
car.engine = function() {
    return 'Whooosh!!!';
}

const tesla = Object.create(car);
tesla.engine = function() {
    return 'Silent';
}
tesla.driver = false;
tesla.owner = 'Elon Musk';

console.log(tesla.wheels);

// RETRIEVING KEYS FROM OBJECTS
console.log(Object.keys(myObj));
console.log(Object.values(myObj.beverage.evening));

// using the for in loop
for (let key in myObj) {
    console.log(`on ${key} we have ${myObj[key]}`);
}

// destructing objects
const {name, age} = myObj;
function sings({ name, age}) {
    return `${name} is ${age} years old`;
}

console.log(sings(myObj));
