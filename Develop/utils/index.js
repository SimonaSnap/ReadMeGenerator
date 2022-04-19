// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "What is the project name? ",
    "How would you describe this application? ",
    "What are the instillation instructions for this application? ",
    "How would a user use this application? ",
    "What are the contribution guidelines? ",
    "Are there any tests for this application? "
];

const names = [
    "name",
    "description",
    "instillation",
    "usage",
    "contribution",
    "tests"
]

// TODO: Create a function to write README file
inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: names[0],
        },
        {
            type: "input",
            message: questions[1],
            name: names[1],
        },
        {
            type: "input",
            message: questions[2],
            name: names[2],
        },
        {
            type: "input",
            message: questions[3],
            name: names[3],
        },
        {
            type: "input",
            message: questions[4],
            name: names[4],
        },
        {
            type: "input",
            message: questions[5],
            name: names[5],
        },
        {
            type: "list",
            message: "What liscense would you like? ",
            name: "liscense",
            choices: ["MIT", "Apache"],
        },
    ])
    .then(function (data)
    {
        console.log(data);

        fs.writeFile("user.md", JSON.stringify(data), function (err)
        {
            err ? console.error(err) : console.log("Success");
        })

    })


// writeToFile;

// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();
