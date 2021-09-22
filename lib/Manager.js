const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      // TODO: Add code here
      // super(): Access and Calls function on object's parent.
      super (name, id, email);
      this.officeNumber = officeNumber;
    };
  
    getRole(){
      return "Manager";
    };
  
    getOfficeNumber(){
      // return this.officeNumber.replace(/^(?:\+1)?\(?(\d{3})\)?[\s\.-]?(\d{3})[\.-]?(\d{4})$/);
      return this.officeNumber;
    };
  }
  
  module.exports = Manager;