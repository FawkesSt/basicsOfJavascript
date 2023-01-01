# Variables

###### This is the basic of declaring variables in javascript


### Let declaration




To declare a variable use the word **let** + **variable name** + **=** + **its value**

```javascript
    let hello = "Hello world! ";
    console.log(hello);
```
The hello variable was declared with the let word so this variable can have your value reassigned if needed.

Now using just the variable name and the equal sign we have reassigned its value to "This is a new message" and displayed on the screen.

```javascript
hello = "This is a new message"
alert(hello + "inside the hello variable");
console.log(hello);
```

An important thing to know, we can assign a new value to a variable declared with **let** but we can not redeclare, try the exemple on the console.log

```javascript
hello = "This is a second message";
console.log(hello);
```

------------


### Const declaration

We also declared a const variable. This type of variable can not be redeclared or reassigned

> Const variables always have to have a value on its declaration

```javascript
const piNumber = 3.14;
console.log(piNumber);
```

We gave it a name of piNumber and set the value to 3.14 check the console to see

We also tried to reassign the value, but we have got an error in the console
```javascript
piNumber = 4;
console.log(piNumber);
```

------------


#### This file is not complete



