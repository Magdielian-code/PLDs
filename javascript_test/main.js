// Image switcher code

let myImage = document.querySelector("img");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

// Personalised welcome message

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.innerHTML = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let myName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

myButton.onclick = function() {
    setUserName();
}
switch (fruitType) {
    case "Oranges":
        console.log("Oranges are sold for $0.8");
        break;
    case "Apples":
        console.log("Apples are sold for $2");
        break;
    case "Water Melon":
        console.log("Water Melons are sold $8");
    default:
        console.log(`Sorry, we are out of fruits ${fruitType}`)

}

const person =  {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} yeras old.`)
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name}`)
    }, 

    nameD() {

    }

};

person.name[0];
person.age;
person.bio();
// "Bob Smith i 32 years old"
console.log(person.name);


const objectName = {
    member1Name: member1Value,
    memeber2Name: member2Value,
    memeber3Name: member3Value,
};

myVAr = "JavaSript is amazing!";
console.log(myVAr)
