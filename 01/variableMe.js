"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, World!";
console.log(greetings);
// Error: Cannot redeclare block-scoped variable 'greetings'.
var userId = 1; // here explicitly defining the type of variable
var userName = "hammad"; // here type is inferred by the value assigned to the variable
// userName = 1; // Error: Type '1' is not assignable to type 'string'.
// if we assigning a value right away then we can skip defining the type of variable
var hero;
function getHero() {
    return "THOR";
}
hero = getHero(); // We need to avoif this kind of code, as it is not clear what type of value hero will have
