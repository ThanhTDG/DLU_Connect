export class User {
  firstName: string;
  lastName: string;
  birthDate: Date;
  sex: 'M' | 'F';

  constructor(
    firstName: string,
    lastName: string,
    birthDate: Date,
    sex: 'M' | 'F'
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.sex = sex;
  }
}
