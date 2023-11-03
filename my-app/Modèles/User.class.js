class User {
  constructor(username, password, firstName, familyName, telephone) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.familyName = familyName;
    this.telephone = telephone;
    this.createdAt = new Date();
    this.modifiedAt = new Date();
  }
}
