function createUser({
  name,
  age,
  email,
}: {
  name: string;
  age: number;
  email: string;
}): { name: string; age: number; email: string } {
  return { name, age, email };
}

function weirdObject({ name: string, age: number }) {
  return { name: "hammad", age: 20 };
}

weirdObject({
  name: "hammad",
  age: 20,
  email: "gdfd",
});
// by doing this it is throwing an error because we are not providing the required arguments

let object = {
  name: "hammad",
  age: 20,
  email: "gdfd",
};
weirdObject(object);
// by doing this it is not throwing any error
// this is weird behavior of objects
