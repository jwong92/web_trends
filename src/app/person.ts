// Define the properties of the class with their data types

export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    constructor(id=0, fname="", lname="", dob=new Date()){
        this.id = id;
        this.firstName = fname;
        this.lastName = lname;
        this.dateOfBirth = dob; 
    }

    // AGE IS DIFFERENCE BETWEEN TODAY'S DATE AND THE CURRENT YEAR
        getAge():number {
        let today: Date = new Date();
        let age: number = today.getFullYear() - this.dateOfBirth.getFullYear();

        if(this.dateOfBirth.getDate() > today.getDate() 
        && this.dateOfBirth.getMonth() > today.getMonth()) {
            age--;
        }

        return age;
    }
}


