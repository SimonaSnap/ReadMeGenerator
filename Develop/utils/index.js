// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is the project name? ",
    "How would you describe this application? ",
    "What are the instillation instructions for this application? ",
    "How would a user use this application? ",
    "What are the contribution guidelines? ",
    "Are there any tests for this application? ",
    "What is your GitHub username? ",
    "What is your GitHub link? ",
    "What is your email address? "
];

const names = [
    "name",
    "description",
    "instillation",
    "usage",
    "contribution",
    "tests",
    "username",
    "link",
    "email",
]

// TODO: Create a function to write README file
const questionArr = [];
for (let i = 0; i < questions.length; i++)
{
    questionArr.push({
        type: "input",
        message: questions[i],
        name: names[i],
    })
}



// writeToFile;

// TODO: Create a function to initialize app
function init()
{

    inquirer
        .prompt([...questionArr,
        {
            type: "list",
            message: "What liscense would you like? ",
            name: "liscense",
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
