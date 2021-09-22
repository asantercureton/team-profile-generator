const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, title, id, email, officeNumber) {
      // TODO: Add code here
      // super(): Access and Calls function on object's parent.
      super (name);
      this.title = "Manager";
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
    };
  
    getRole(){
      return this.title;
    };

    getId(){
      return this.id;
    };

    getEmail(){
      return this.email;
    };
  
    getOfficeNumber(){
      return this.officeNumber;
    };
  }
  
  module.exports = Manager;