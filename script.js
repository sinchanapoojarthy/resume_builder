function addnewwefield(){ 


let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("wefield");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here")

let WeOb=document.getElementById("we");
let weaddButtonOb=document.getElementById("weaddButton");

WeOb.insertBefore(newNode,weaddButtonOb);

}

function addnewaqfield(){

    
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("aqfield");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here")

let aqOb=document.getElementById("aq");
let aqaddButtonOb=document.getElementById("aqaddButton");

aqOb.insertBefore(newNode,aqaddButtonOb);


}

//generating cv
function generateCV(){

    //console.log("generating cv");


let namefield = document.getElementById("namefield").value;
let nameT1=document.getElementById("nameT1");
nameT1.innerHTML=namefield;
//direct
document.getElementById("nameT2").innerHTML=namefield
//contact
document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
//address
document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;

document.getElementById("fdT").innerHTML=document.getElementById("fbfield").value;
document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;

document.getElementById("linkedT").innerHTML=document.getElementById("linkedfield").value;
// obj
document.getElementById("objectiveT").innerHTML=document.getElementById("objectivefield").value;
document.getElementById("skillT").innerHTML=document.getElementById("skillfield").value;

//we
let wes=document.getElementsByClassName("wefield");

let str="";

for (let e of wes){
    str  = str +  `<li>  ${e.value}  </li> `;
}
document.getElementById("weT").innerHTML=str;
//aq
let aqs =document.getElementsByClassName("aqfield");
let str1="";
for(let e of aqs){
    str1+=<li> ${e.value}</li>;  
}
document.getElementById("aqT").innerHTML=str1;
//image
let file =document.getElementById("imgfield").files[0];
console.log(file);
let reader=new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);
document.getElementById("abcT").innerHTML=document.getElementById("abcfield").value;
document.getElementById("hobbyT").innerHTML=document.getElementById("hobbyfield").value;


//set img in temp
reader.onloadend=function(){ 
document.getElementById("imageTemplate").src=reader.result;
};


document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";



}
//printcv
function printCV(){
    window.print();
}
