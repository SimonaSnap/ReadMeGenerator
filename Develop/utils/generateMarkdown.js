// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)
{

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license)
{
  if (license == "None")
  {
    return "";
  } else
  {
    return `## Liscense
${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data)
{
  return `# ${data.name}
## Table of Contents
* [Description](#description)
* [Description](#description)
* [Description](#description)
* [Description](#description)
## Description 
${data.description}
## Description 
${data.description}
## Description 
${data.description}

${renderLicenseSection(data.liscense)}
`;


}

module.exports = generateMarkdown;
