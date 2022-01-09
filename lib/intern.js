const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, ID, email, school) {
     super(name, ID, email);
     
     this.school = school ;  
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.ID;
    }
    getEmail(){
        return this.email;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }

}

module.exports = Intern;