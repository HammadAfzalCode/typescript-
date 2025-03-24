function greet(name) {
  return `Hello, ${name}!`;
}

greet(5);

//  here any will be inferred as the type of name
//  and it will not throw any error

//  but if we want to restrict the type of name to string
//  then we can do it like this
//  function greet(name: string) {
//    return `Hello, ${name}!`;
//  }

let loginUser = (username: string, password: string, isPaid: boolean = false) => {
  return { username, password };
};
loginUser("hammad","78"); // Error: Expected 3 arguments, but got 1.
// we can fix this error by providing all the required arguments
loginUser(
  "hammad",
  "123456",
  true // we can also skip the name of the argument
);

export {};
