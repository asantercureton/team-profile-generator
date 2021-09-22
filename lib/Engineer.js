const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
      // TODO: Add code here
      super (name, id, email), 
      this.gitHub = gitHub;
    }; 
  
  
    getRole(){
      return "Engineer";
    };

    getGitHub(){
      return this.gitHub;
    };
  }
  
  module.exports = Engineer;