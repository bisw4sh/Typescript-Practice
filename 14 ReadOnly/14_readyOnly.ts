class Personn {
  firstName: string = "John";
  lastName: string = "Doe";
  get fullName() {
    return this.firstName + this.lastName;
  }
}

const personn = new Personn();
console.log(personn.fullName); // John Doe
// personn.fullName = "Dear Reader"; //!Error fullName is readonly