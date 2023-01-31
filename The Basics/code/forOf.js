let users = ["Matheus", "Lê", "Joe", "Jammes"];

for (let user of users) {
    console.log(users.indexOf(user));
}



//Specifically for arrays
//Can not break the loop inside a function

users.forEach(function(user){
    console.log(user);
});