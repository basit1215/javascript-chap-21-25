var firstName= prompt("Enter your First name...");
var lastName= prompt("Enter your Last name...");
var fullName= firstName+" " + lastName;
alert("You Full name is " + fullName);

var userInp= prompt("Enter your favorite mobile phone model");
document.write("My favorite mobile phone is: " + userInp + "<br>");
document.write("Lengtj of string: " + userInp.length+ "<br>"+ "<br>");

var country= "Pakistani";
document.write("String: " + country+ "<br>");
document.write("Index of 'n': " + country.indexOf("n") + "<br>"+ "<br>");

var world= "Hello World";
document.write("String: " + world+ "<br>");
document.write("Last index of 'l': " + world.lastIndexOf("l") + "<br>"+ "<br>");

var country= "Pakistani";
document.write("String: " + country+ "<br>");
document.write("Character at index 3: " + country.charAt(3) + "<br>"+ "<br>");

var firstName= prompt("Enter your First name...");
var lastName= prompt("Enter your Last name...");
var fullName= firstName.concat(" " +lastName)
alert("You Full name is " + fullName);


var cityName= "Hyderabad";
document.write("City: " + cityName+ "<br>");
document.write("After replacement: "  + cityName.replace("Hyder", "Islam")+ "<br>"+ "<br>");

var msg="Ali and Sami are best friends. They play cricket and football together.";
document.write(msg+ "<br>");
document.write("<b>" + "After replacing" + "</b>"+ "<br>");
document.write(msg.replaceAll("and","&")+ "<br>"+ "<br>");

var str="472";
var num=Number(str);
document.write("Value: "+ str+ "<br>" + "Type: " + "string"+ "<br>" + "Value: "+ num + "<br>" + "Type: " + "number"+ "<br>"+ "<br>");

 var userInput= prompt("Enter small and capital alphabet, \ntrying all character to convert Uppercase");
document.write(userInp+ "<br>");
document.write(userInput.toUpperCase() + "<br>"+ "<br>");

// var userInput3= prompt("Enter any Word\nI will convert word to title case");
// var titleCase= userInput3;
// document.write("User Input: " + titleCase + "<br>" + "Title case: " + toTitleCase(titleCase)+ "<br>"+ "<br>");

var num2= 35.36;
var tostr= num2.toString();
document.write("Number: "+ num2+ "<br>" + "Result: " + tostr.replace(".","")+ "<br>"+ "<br>");

 var specialChar =["@" , ",", "." ,"!"];
 var userInput2 = prompt("Enter your full name");
 var flag= false;
 for(i=0; i<userInput2.length ; i++){
if(userInput2===specialChar.length){
   flag= true
}
 }
 if(!flag){
    alert("Please Enter a valid username\nThe username cannot contain special symbols [ ! @ . ,]")

 }
 else{
    document.write(userInput2+ "<br>"+ "<br>");
 }

 var fruits= ["cake", "apple pie", "cookie", "chips", "patties"];
 var userInput4= prompt("Welocme to ABC Bakery,\nWhat do you want to order sir/ma'am?");
 var flag=false;
 for(i=0 ;  i<fruits.length; i++){
if(userInput4.toLowerCase()===fruits[i] || userInput4.toUpperCase()===fruits[i] ){
flag=true
}
 }
 if(!flag){
document.write(userInput4 + " is Available at index " + i + " in our bakery..."+ "<br>"+ "<br>");
 }
 else{
    document.write("We are sorry. " + userInput4 + " is Not available in our bakery..."+ "<br>"+ "<br>");
 }
  
 var university = "University of Karachi"; 
var uniConvtArr= university.split();
document.write(uniConvtArr+ "<br>"+ "<br>");

var userInput5= prompt("Enter something...");
var lastWord= userInput5.charAt(userInput5.length -1);
document.write("User input: " + userInput5+ "<br>" +"Last character of input: " + lastWord+ "<br>"+ "<br>");

var str2= "the quick brown fox jumps over the lazy dog"
var words= str2.split(" ");
var count=0;
for(i=0; i<words.length; i++){
if(words[i]==="the"){
count++
}
}

document.write("Text: "+ str2+ "<br>" +"There are " + count+" occurrence(s) of word 'the'"+ "<br>"+ "<br>");








