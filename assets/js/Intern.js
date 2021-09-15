const Employee = require('./assets/js/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
      // TODO: Add code here
      super (name, id, email);
      this.title = "Intern";
      this.school = school;
    };
  
    getRole(){
      return this.title;
    };
  
    getSchool(){
      return this.school;
    };
  }
  
  module.exports = Intern;