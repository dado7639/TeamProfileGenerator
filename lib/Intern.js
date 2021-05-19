const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github);
    this.github = github;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
