const Engineer = require("../lib/Engineer");

test("create a new engineer", () => {
  const newGuy = new Engineer();
  expect(typeof newGuy).toBe("object");
});

test("get the engineers name", () => {
  const name = "dan";
  const newGuy = new Engineer(name);
  expect(newGuy.getName()).toBe(name);
});

//get id
test("get the engineers id", () => {
  const id = 13;
  const newGuy = new Engineer("dan", id);
  expect(newGuy.getId()).toBe(id);
});
//get email
test("get the engineers email", () => {
  const email = "exampleEmail@gmail.com";
  const newGuy = new Engineer("dan", 13, email);
  expect(newGuy.getEmail()).toBe(email);
});

//role
test("get the engineers role", () => {
  const role = "Engineer";
  const newGuy = new Engineer("dan", 13, "exampleEmail@gmail.com");
  expext(newGuy.getRole()).toBe(role);
});

test("get the engineers github", () => {
  const gitHub = "dado7639";
  const newGuy = new Engineer("dan", 13, "exampleEmail@gmail.com", gitHub);
  expect(newGuy.getGithub()).toBe(gitHub);
});
