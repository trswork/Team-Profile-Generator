const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, ID, email, school) {
     super(name, ID, email);
     this.school = school;   
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
    getschool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }

}

module.exports = Intern;