const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, title, id, email, gitHub) {
      // TODO: Add code here
      super (name, id, email),
      this.title = "Engineer";
      this.gitHub = gitHub;
    };
  
  
    getRole(){
      return this.title;
    };
  
    getGitHub(){
      return this.gitHub;
    };
  }
  
  module.exports = Engineer;