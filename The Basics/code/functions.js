function greet(usrName){
    console.log("Welcome to our site " + usrName);
}

function signUp(){
    let name = prompt("Whats is your name:");
    greet(name);
}

signUp();
