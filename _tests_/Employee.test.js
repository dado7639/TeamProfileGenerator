const Employee = require("../lib/Employee");

// Arange  //Act // Assert

//create an employee
test("create a new employee", () => {
  const newGuy = new Employee();
  expect(typeof newGuy).toBe("object");
});

//get name
test("get the employees name", () => {
  const name = "dan";
  const newGuy = new Employee(name);
  expect(newGuy.getName()).toBe(name);
});

//get id
test("get the employees id", () => {
  const id = 13;
  const newGuy = new Employee("dan", id);
  expect(newGuy.getId()).toBe(id);
});
//get email
test("get the employees email", () => {
  const email = "exampleEmail@gmail.com";
  const newGuy = new Employee("dan", 13, email);
  expext(newGuy.getEmail()).toBe(email);
});

//role
test("get the employees role", () => {
  const role = "Employee";
  const newGuy = new Employee("dan", 13, "exampleEmail@gmail.com");
  expext(newGuy.getRole()).toBe(role);
});
