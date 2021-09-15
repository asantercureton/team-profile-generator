class Manager {
    constructor(name, title, id, email, officeNum) {
      // TODO: Add code here
      this.name = name;
      this.title = title;
      this.id = id;
      this.email = email;
      this.number = number;
    };
  
  
    getName(){
      return this.name;
    };
  
    getId(){
      return this.id;
    };
  
    getTitle(){
      return this.title;
    };
  
    getEmail(){
      return this.email;
    };
  
    getNumber(){
      return this.number;
    };
  }
  
  module.exports = Manager;