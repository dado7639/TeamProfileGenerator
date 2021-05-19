const inquirer = require("inquirer");
const fs = require("fs");

/// how to ask diff questions for different jobs(employee manager eng)
const managerQuestions = [
  {
    type: "input",
    Message: "What is the team manager's name?",
    name: "name",
  },
  {
    type: "input",
    Message: "What is the employee ID?",
    name: "id",
  },
  {
    type: "input",
    Message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    Message: "What is your office number?",
    name: "office",
  },
];

const enginerQuestions = [
  {
    type: "input",
    Message: "What is the team engineers's name?",
    name: "name",
  },
  {
    type: "input",
    Message: "What is the employee ID?",
    name: "id",
  },
  {
    type: "input",
    Message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    Message: "What is your github username?",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    Message: "What is the team interns's name?",
    name: "name",
  },
  {
    type: "input",
    Message: "What is the interns ID?",
    name: "id",
  },
  {
    type: "input",
    Message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    Message: "What is your school name",
    name: "school",
  },
];
