// function addTwoNumber(num) {
//   return "Hello";   // Error: Type 'string' is not assignable to type 'number'.
// }
function addTwoNumber(num: number): number {
  return num + 2; // No error
}

// void is a type that represents the absence of a value.
// It is used as the return type of functions that do not return a value.
function log(message: string): void {
  console.log(message);
}

// never is a type that represents the type of values that never occur.
// For example, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.
function throwError(message: string): never {
  throw new Error(message);
}
