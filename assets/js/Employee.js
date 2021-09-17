class Employee {
  constructor(name, title, id, email, gitHub) {
    // TODO: Add code here
    this.name = name;
    this.title = title;
    this.id = id;
    this.email = email;
    // this.gitHub = gitHub;
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

  // getGitHub(){
  //   return this.gitHub;
  // };
}

module.exports = Employee;