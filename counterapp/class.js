// const student={
//     fullName:"Radhika Krishnapriya",
//     Age:21,marks:98,
//     printmarks :function(){
//         console.log("marks=", this.marks);
//     },
// };
// let arr=["apple","mango","banana"];
// console.log(arr);
// arr.push("litchi");
// console.log(arr);
// student.printmarks();
// const emp={
//     cattax(){
//         console.log("tax is 10%");
//     },
// }
// const kk={
//     salary:5000000,
//     caltax(){
//         console.log("tax is 20%");

//     },
// };
// kk__proto__=emp;
// const kk2={
//     salary:8000000
// };
// kk2__proto__=emp;
class perso{
    constructor(name){
        console.log("parent constructor call")
        this.species="homosapiens";
        this.name=name;
    }
    eat(){
        console.log("eat first");
    }
}
class eng extends perso{
    constructor(branch){
        console.log("eng constrctor call")
        super(name);
        this.branch=branch;
        console.log("eng constrctor call end")

    }
    work(){
        console.log("work as supreme");
    }
    work2(){
        super.eat();
        console.log("work as supreme");
    }
}
let shikha=new eng("chemical emg");