const Intern = require("../lib/Intern");

test("create a new Intern", () => {
  const newGuy = new Intern();
  expect(typeof newGuy).toBe("object");
});

test("get the Interns name", () => {
  const name = "dan";
  const newGuy = new Intern(name);
  expect(newGuy.getName()).toBe(name);
});

//get id
test("get the interns id", () => {
  const id = 13;
  const newGuy = new Intern("dan", id);
  expect(newGuy.getId()).toBe(id);
});
//get email
test("get the Interns email", () => {
  const email = "exampleEmail@gmail.com";
  const newGuy = new Intern("dan", 13, email);
  expect(newGuy.getEmail()).toBe(email);
});

//role
test("get the Interns role", () => {
  const role = "Intern";
  const newGuy = new Intern("dan", 13, "exampleEmail@gmail.com");
  expext(newGuy.getRole()).toBe(role);
});

test("get the Interns school", () => {
  const school = "Boulder";
  const newGuy = new Engineer("dan", 13, "exampleEmail@gmail.com", school);
  expect(newGuy.getSchool()).toBe(school);
});
