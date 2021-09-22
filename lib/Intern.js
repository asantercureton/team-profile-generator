const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      // TODO: Add code here
      super (name, id, email),
      this.id = id;
      this.email = email;
      this.school = school;
    };
  
    getRole(){
      return "Intern";
    };

    getId(){
      return this.id;
    };
  
    getEmail(){
      return this.email;
    };

    getSchool(){
      return this.school;
    };
  }
  
  module.exports = Intern;