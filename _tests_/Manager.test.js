const Manager = require("../lib/Manager");

test("create a new Manager", () => {
  const newGuy = new Manager();
  expect(typeof newGuy).toBe("object");
});

test("get the Managers name", () => {
  const name = "dan";
  const newGuy = new Manager(name);
  expect(newGuy.getName()).toBe(name);
});

//get id
test("get the managers id", () => {
  const id = 13;
  const newGuy = new Manager("dan", id);
  expect(newGuy.getId()).toBe(id);
});
//get email
test("get the managers email", () => {
  const email = "exampleEmail@gmail.com";
  const newGuy = new Manager("dan", 13, email);
  expect(newGuy.getEmail()).toBe(email);
});

//role
test("get the Manager role", () => {
  const role = "Manager";
  const newGuy = new Manager("dan", 13, "exampleEmail@gmail.com");
  expext(newGuy.getRole()).toBe(role);
});

test("get the managers office number", () => {
  const office = 33;
  const newGuy = new Engineer("dan", 13, "exampleEmail@gmail.com", office);
  expect(newGuy.getOffice()).toBe(gitHub);
});
