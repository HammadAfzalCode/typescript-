type User = {
  name: string;
  age: number;
  email: string;
};
function createUser(user: User): User {
  return { name: "hammad", age: 20, email: "hammad" };
}
