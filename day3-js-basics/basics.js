//Variables

let name = "Alex"
let age = 22;
let isLearning = true;

//Output values to the console

console.log("Name:", name);
console.log("Age:", age);
console.log("Learning JS:", isLearning);

//Arrays
let skills = ["HTML", "CSs", "JavaScript"];
console.log("Skills:", skills);

//Objects
let student = {
    name: "Alex",
    age: 21,
    journey: "Splitwise Clone"
};
console.log("Student:", student);

//Functions
function greet(user) {
    return `Welcome, ${user}`;
}
console.log(greet("soyam"));

//Loops
for (let i = 0; i < 10; i++){
    console.log("Practice makes perfect! Step:", i);   
}

//Adding something to skill array
skills.push("Git");

//Adding a new key-value pair to the student object
student.country = "India"

console.log("Updated Skills:", skills);
console.log("Updated Student:", student)