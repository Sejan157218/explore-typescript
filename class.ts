class student{
    name : string;
    id : number;
    // if private
    private _number :number
    constructor(name:string,id : number){
        this.name = name;
        this.id = id;
        this._number = 5555;
    }
    // function
    getDetailes(num1:number,num2:number) :number{
       const getSum = num1 + num2
       return getSum;
    }
    getNumber() :number{
       const newId = this._number +1;
        return newId;
    }
}


// call class
const newStudent = new student('sejan',111)
newStudent.getDetailes(4,5);
newStudent.getNumber();
