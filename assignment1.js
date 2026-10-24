// Assignment 1: Variables, Data Types, and Console Operations

var name = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

// Display values and their data types
console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")");
console.log("Skills: " + JSON.stringify(skills).replace(/,/g, ", ") + " (Type: " + typeof skills + ")");