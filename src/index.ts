// let a = 25;
// let myname = "rafia"

// console.log(a)

// let b: string = "{maha}"
// let c : number = 999
// let d : boolean 

// let myfirstname : string | number

// myfirstname = "34"


// const func = (req: number, res: number): number=>{
//     console.log(req, res)
//     // return  String (req*res)
//     return  (req*res)
// }


//type Alias

type userName = string
type userName2 = string | number

let a: userName = "maha"
let b: userName2 = 25

type useName3 = (n:number, m:number) => number;

const func: useName3 = (n, m)=>{
    console.log(n,m)
    return n * m
}