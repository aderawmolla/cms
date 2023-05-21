class Patient {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.age = data.age;
    this.username = data.username; // Corrected spelling
    this.password = data.password;
  }
}

module.exports = Patient;
