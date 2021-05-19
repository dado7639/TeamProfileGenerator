const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const team = [];

/// how to ask diff questions for different jobs(employee manager eng)

function init(){
    //create functions for all teams
    createManager() => {
        console.log("Plese asdasfd asd f");
        inquirer.prompt([
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
        ])
        .then(data =>{
            const manager = new Manager(data.name, data.id, data.email, data.office);
            //still need to create this funciton that will create the next team members
            createTeam();
        });        
    }
    
    createTeam() => {
        //inquire.prompt  adding team members 
        //ask what kind of teammate they want to create
        //give option of i dont want to create team members
        //switch statements
        //write to file (index.html) 
    }   

}




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
