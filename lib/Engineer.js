const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      // TODO: Add code here
      super (name, id, email),
      this.id = id;
      this.email = email;
      this.gitHub = gitHub;
    }; 
  
  
    getRole(){
      return "Engineer";
    };

    getId(){
      return this.id;
    };

    getEmail(){
      return this.email;
    };
  
    getGitHub(){
      return this.gitHub;
    };
  }
  
  module.exports = Engineer;