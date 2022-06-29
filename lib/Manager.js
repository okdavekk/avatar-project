const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(userName, userId, userEmail, officeNumber) {
        super(userName, userId, userEmail)
        this.officeNumber = officeNumber
    }
};

const usrName = 'something';
const usrId = 1;
const usrEmail = 'email@email.com';
const officeNum = 3;


const manager = new Manager(usrName, usrId, usrEmail, officeNum)

console.log(manager)