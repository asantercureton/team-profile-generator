class Intern {
    constructor(name, title, id, email, school) {
      // TODO: Add code here
      this.name = name;
      this.title = title;
      this.id = id;
      this.email = email;
      this.school = school;
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
  
    getSchool(){
      return this.school;
    };
  }
  
  module.exports = Intern;