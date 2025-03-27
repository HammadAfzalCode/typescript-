type User2 = {
  readonly name: string;
  readonly age: number;
  email: string;
  credCard?: number;
  // this is an optional property
};

let myUSer: User2 = {
  name: "hammad",
  age: 20,
  email: "hammad",
};

myUSer.age = 21;
// this will throw an error because we have made the age property readonly
// Property 'age' is read-only.
// myUSer.name = "hammad";
// this will throw an error because we have made the name property readonly 'name' is a read-only property.
// myUSer.email = "hammad";
// this will not throw an error because we have not made the email property readonly

type cardNumber = {
  cardNumber: number;
};

type cardData = {
  cardNumber2: number;
  cardHolder: string;
};

type cardDetails = cardNumber & cardData;
// this is intersection type
// this is a type that is a combination of two types
// this is a type that has all the properties of both types
// this is a type that has all the properties of both types with the same name
