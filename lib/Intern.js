const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, title, id, email, school) {
      // TODO: Add code here
      super (name, id, email),
      this.title = "Intern";
      this.id = id;
      this.email = email;
      this.school = school;
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

    getSchool(){
      return this.school;
    };
  }
  
  module.exports = Intern;