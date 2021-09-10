// create interface

interface CommonData{
    name : string,
    age : number,
    birthYear ?: number,
}

const sakib : CommonData={
    name: 'sakib',
    age : 30,
    birthYear : 1970,
}

interface devoloper extends CommonData{
    laguage : string,
}

const ash: devoloper ={
    name : 'ash',
    age : 25,
    birthYear : 1995,
    laguage : 'js',
}