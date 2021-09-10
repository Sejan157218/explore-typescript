// Normal object ts
/* const mySelf :{myName:string,age:number} = {
    myName: 'sejan',
    age : 25,
} */

// Good practice ts
type mySelfType = {
    myName:string,
    age:number,
}
const mySelf : mySelfType = {
    myName: 'sejan',
    age : 25,
}