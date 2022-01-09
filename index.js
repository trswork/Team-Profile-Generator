const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require("path");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const { data } = require('browserslist');

const employee = [];

function initApp() {
    startHtml();
    addEmployee();
}

const addEmployee = () => {
    return inquirer.prompt([
        {
         type: "choice",
         name: "role",
         message: "Do you want to add a team member?",
         choices: ["Manager","Engineer","Intern","N/A"]
        },
        {
         type: "input",
         name: "name",
         message: "What is the employee's name?",
        },
        {
         type: "input",
         name: "ID",
         message: "Enter employee ID number.",   
        },
        {
         type: "input",
         name: "Email",
         message: "Emailed the employee's email address.",   
        }
    ]).then(({name, role, ID, email}) => {
        let roleType = "";
        if (role === "Engineer") {
            roleType = "github userID";
        } else if (role === "Intern") {
            roleType = "school name";
        } else {
            roleType = "office number"
        }    
        });
    };
console.log(data);

function writeToFile(data){
    const cards = ""
    for (let i = 0; i < data.length; i++) {
        cards = `<div class="col-4 mt-4">
        <div class="card bg-primary border-dark">
            <div class="card-header text-white">
                <h3 id="name">${data[i].name}</h3>
                <ul>
            <li class="list-group-item" id="ID">${data[i].id}</li>
            <li class="list-group-item" id="Email">${data[i].email}</li>
        </ul>
        </div>
    </div>
</div>`
    };

    fs.writeFile("./index.html", data => {
        if(err) {
            console.log(err);
            return;
        } else {
            console.log("Team Profile has been created")
        }
    })
};