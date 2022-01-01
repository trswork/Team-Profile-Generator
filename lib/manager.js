const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, ID, email, officenumber) {
     super(name, ID, email);
     this.officenumber = officeNumber; 
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
    getOfficeNumber(){
        return this.officenumber;
    }
    getRole(){
        return "Manager";
    }

}

module.exports = Manager;