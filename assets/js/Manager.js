const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, title, id, email, officeNumber) {
      // TODO: Add code here
      // super(): Access and Calls function on object's parent.
      super (name, id, email);
      this.title = "Team Manager";
      this.officeNumber = officeNumber;
    };
  
    getRole(){
      return this.title;
    };
  
    getOfficeNumber(){
      return this.officeNumber;
    };
  }
  
  module.exports = Manager;