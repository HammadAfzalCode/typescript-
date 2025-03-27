let greetings: string = "Hello, World!";
console.log(greetings);

export {}; // this will temporarily fix the error
// Error: Cannot redeclare block-scoped variable 'greetings'.

let userId: number = 1; // here explicitly defining the type of variable
let userName = "hammad"; // here type is inferred by the value assigned to the variable
// userName = 1; // Error: Type '1' is not assignable to type 'string'.
// if we assigning a value right away then we can skip defining the type of variable

let hero;

function getHero() {
  return "THOR";
}
hero = getHero(); // We need to avoif this kind of code, as it is not clear what type of value hero will have
