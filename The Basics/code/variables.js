//Variables

//Let declaration

let hello = "Hello world! ";
console.log(typeof hello);
console.log(hello);

alert("The hello variable was declared with the let word so this variable can have your value reassigned, the value is: " + hello);

hello = "This is a new message"
alert(hello + "inside the hello variable");
console.log(hello);

//Const declaration

const piNumber = 3.14;
console.log(piNumber);
alert("We also declared a const variable, this type of variable can not be redeclared or reassigned")
alert("We gave it a name of piNumber and set the value to 3.14 check the console to see");
alert("We also tried to reassign the value, but we've got an error in the console");

piNumber = 4;
console.log(piNumber);
