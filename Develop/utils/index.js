// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
//also created an array of names and defualts to make sure all the parts of the input has corresponding inputs
const questions = [
    "What is the project name? ",
    "How would you describe this application? ",
    "Does this project have a deployed link? ",
    "What are the instillation instructions for this application? ",
    "How would a user use this application? ",
    "What are the contribution guidelines? ",
    "Are there any tests for this application? ",
    "What is your GitHub username? ",
    "What is your email address? ",
    "What is your fullname? ",
    "If including a screenshot what would the alt text be? ",
];

const names = [
    "name",
    "description",
    "deployment",
    "instillation",
    "usage",
    "contribution",
    "tests",
    "username",
    "email",
    "fullname",
    "alttext",
]

const defaults = [
    "This project does not have a project name",
    "There is no description for this project",
    "This project does not have a deployed page",
    "There are no instillation guidelines for this project",
    "There are no description on how to use this application",
    "There are no contribution guidelines for this project",
    "There are no tests for this application",
    "",
    "",
    "",
    "there is no screenshot",
]

// TODO: Create a function to write README file
//questionArr is what will be placed in the prompt part of the code, becuase the prompt does not care to have a for loop inside it
const questionArr = [];
for (let i = 0; i < questions.length; i++)
{
    questionArr.push(
        {
            type: "input",
            message: questions[i],
            name: names[i],
            default: defaults[i],
        },
        {
            type: "confirm",
            message: "Are there any screenshots you would like to include? ",
            name: "screenshots",
            default: "",
        })
}



// writeToFile;

// TODO: Create a function to initialize app
//prompt ...questionArr uses the spread to insert the arr i made above into inquirer, 
//the then now takes all my inputs and inserts it into generate markdown and after running that file it will then write the final readme file
function init()
{

    inquirer
        .prompt([...questionArr,
        {
            type: "list",
            message: "What license would you like? ",
            name: "license",
            choices: ["MIT", "BSD 2-Clause License", "BSD 3-Clause License", "Boost Software License", "The Unlicense", "None"],
        }])
        .then(function (data)
        {
            console.log(data);

            fs.writeFile("user.md", generateMarkdown(data), function (err)
            {
                err ? console.error(err) : console.log("Success");
            })

        })
}

// Function call to initialize app
init();
