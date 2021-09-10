"use strict";
class student {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this._number = 5555;
    }
    // function
    getDetailes(num1, num2) {
        const getSum = num1 + num2;
        return getSum;
    }
    getNumber() {
        const newId = this._number + 1;
        return newId;
    }
}
// call class
const newStudent = new student('sejan', 111);
newStudent.getDetailes(4, 5);
newStudent.getNumber();
