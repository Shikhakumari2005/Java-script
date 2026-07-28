// console.log("Radhey Radhey");
// window.alert("Hari Bol");
// console.log(document.body);
// console.log(document.body.childNodes[1]);
// console.log(document.head);
// let head=document.getElementById("heading");
// console.log(head);
// console.dir(head);
// let firstelm=document.querySelector("h")
// console.log(firstelm);
// let all=document.querySelectorAll(".heading-class")
// console.log(all);
// let Allid=document.querySelector("#heading")
// console.log(Allid);

  
//properrtiese

// let head=document.querySelector("#heading");
// console.log(head);
// console.dir(head);
// console.dir(head.tagName);
//let head2=document.querySelector("div");
// console.log(head2);
// console.dir(head2);
// console.dir(head2.tagName);
// console.dir(head2.innerText);
// head2.innerText="Hari Bol";
//console.dir(head2.innerText="Hari Bol");
//console.dir(head2.innerHTML="<div> <i>new doc</i></div>");


//Atrribute
let head2=document.querySelector("h3");
console.dir(head2.getAttribute("id"));
console.log(head2.setAttribute("name" ,"JAVA" ));
head2.style.backgroundColor="green";



//Insert Element
let el=document.createElement("button");
el.innerText="Click Me!";
console.log(el);
el.append("div");