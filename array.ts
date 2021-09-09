const salay = 60000; 
const salayInString = '60000';

// array 
const numberAndStringArray: (string|number)[] = [4,6,7,'6',777,888,'sejan'];
const stringArray :string[] = ['sejan','sajal','Ash'];

const numberArray:number[] =  [4,6,7,6,777,888];

// array function
let empryArray = 0;
for(const element of numberArray){
    if(element < empryArray){
        empryArray = element;
    }
}