//If statement
let myName="Ruba";
if(myName){
    console.log("hi ruba....");
}
// output:hi ruba...
let my;
if(my){
    console.log("hi ruba....");
}
//output:nothing print
let ruba="how are you";
if(ruba){
    console.log("Fine");
}else{
    console.log("sorry who r u");
}
//output:Fine
let rubavathy;
if(rubavathy){
    console.log("Fine");
}else{
    console.log("sorry who r u");
}
//output:sorry who r u
//switch
let marks=80;
switch(marks){
    case 90:
        console.log("grade A");
        break;
    case 80:
        console.log("grade B");
        break;
    default:
        console.log("no grade");
}
//Ternary operation
let a=90;
let b=50;
let result=a>b? "you pass the exam":"you fail the exam";
console.log(result);
//user input:
let alertMessage=alert("alert message format");
console.log(alertMessage);
//get input from user in boolean format
let alertMsg=confirm("Output in the form of boolean");
console.log(alertMsg);
// get input in form of string
//it give two option one is OK and another one is cancel
//if user give ok then output with come user gave input
let yourName=prompt("If they enter input and press okay button");
console.log(yourName)
//else if
// it will give null to avoid this you can use null coalescing operator
let enterName=prompt("check if they press okay or cancel");
console.log(enterName??"you didn't enter your name please enter your name")
//else user enter nothing but they gave okay then there will be some mistake to avoid 
//this we can you this method
let fav=prompt("Dosa");
if(fav){
    console.log(fav??"Enter your fav food");
}else{
    console.log("sry you not enter you fav food");
}
let enterYourCollegeName=prompt("enter college name and take extra space and extra extra can be remove by trim");
console.log(enterYourCollegeName.trim().length);// INPUT: sns  //OUTPUT: 3
console.log(enterYourCollegeName.length);//without trim INPUT:SNS                             //output:50