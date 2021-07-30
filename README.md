# Company_Directory

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## **Table of Contents**

1. [Description](#description)
2. [Usage](#usage)
3. [Technologies](#technologies)
4. [Questions](#questions)
5. [Link](#links)
6. [License](#license)

## Description

The objective of this command-line application is to generate and adjust the company's existing employee directory.

## Usage

In order for the user to deploy the command-line application, they will first need git clone https://github.com/pazjenni04/company_directory.git and proceed to install the following libraries: inquirer, mysql2, console-table and dotenv.

`npm init -y`

and then type the following to download all necessary packages and create a package.json and a package-lock.json.

`npm install`

Once all libraries have been downloaded, then the user will proceed in opening a 'New Terminal' in their visual studio code and type the following to initiate the command-line application:

`node index.js `

Once the user presses enter, they will then be prompted with the main menu.

![The following is a screenshot of the main menu the user will be prompted when the application is commenced.](images\main-menu_img.PNG)

### View Employees

From the main menu, the user can choose multiple options including 'View Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', or 'Quit' if they do not want to proceed.

If the user chooses 'View Employees', a table will be created detailing the current employees within the directory and will showcase their employee id, their first and last names, their role id, and the manager that oversees that employee.

![The following image showcases the the table that the user will be presented with when choosing 'View Employees'.](images\view-employees_img.PNG)

The user is then requested to choose an other option from the main menu.

### Add Employee

On the main menu, the user can choose to add an employee to the current company directory by choosing 'Add Employee.'

![The following image showcases the option to add an employee.](images\add-employee_img.PNG)

Once the chooses 'Add Employee', a table of the current available roles will be showcased for the user to refer to when entering the new employees current role ID.

![The following image showcases the table of available roles and their corresponding role IDs in order for the user to use as reference when inputting the new employee's role ID.](images\role-id_img.PNG)

Once the user enters the corresponding role ID for the employee, the next series of questions will prompt requesting for the new employee's first name, last name, and their manager. Once completed the terminal will process the employee and will be added into the company directory.

![The following image showcases the questions prompted for the add employee option](images\add-employee_img.PNG)

![The following image shows where the employee was added to the company directory](images\added-to-directory_img.PNG)

Once completed, the user will then be prompted with the main menu again so that they can choose another option within the directory.

### Update Employee Role

If the user decides to update a current employee's role, they would choose 'Update Employee Role' in the main menu.

![The following image showcases the set of questions prompted in order to generate the engineer card for the directory](https://raw.githubusercontent.com/pazjenni04/employee-directory_generator/main/src/images/engineer-prompt_img.PNG)

Once again, when the user finishes answering all pertinent questions to generate the engineer role in the directory, they will again be prompted to choose one of the following positions to continue building the directory, an engineer, an intern, or choosing not to add any additional employees.

If the user chooses "No more employees to add." then the user will then get their file generated with only the two cards they created, manager and engineer.

### View All Roles

If the user decides to continue by adding an intern to their directory, then by choosing "Intern" in the prompt "Please choose one of the following positions to continue building your directory" then they will then be prompted with all pertinent questions needed to generate an intern role.

![The following showcases all the questions that the user is prompted with to create an intern card within the directory](https://raw.githubusercontent.com/pazjenni04/employee-directory_generator/main/src/images/intern-prompt_img.PNG)

Once the user has finished answering all needed questions to generate the intern card they will be presented with the same prompt "Please choose one of the following positions to continue building your directory." At this point, the user can continue adding multiple engineers and/or interns as needed in order to complete their employee directory or to finish generating their file by choosing "No more employees to add." Once completed, the terminal will console log "Success!" and a new file will be generated with the department name they provided at the beginning of the application as the new file name.

![The following shows the final generated directory](https://raw.githubusercontent.com/pazjenni04/employee-directory_generator/main/src/images/generated-directory_img.PNG)

### Add Role

### View All Departments

### Add Department

## Technologies

- Javascript
- Node.js
- CSS
- Inquirer package
- Jest package

## Questions

_Questions? Feel free to contact me._

- Via [Gtihub](https://github.com/pazjenni04)
- Via [Email](pazjenni1331@gmail.com)

# Links

To see a demonstration of this application, feel free to watch the following link.
https://youtu.be/Rrb_llHudXo

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
