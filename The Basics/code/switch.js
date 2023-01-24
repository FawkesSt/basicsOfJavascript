let car = prompt("Witch car do you want to buy?").toLowerCase();

switch(car){
    case "honda":
    alert(`${car} costs 33.000$`);
    break

    case "fiat":
    alert(`${car} costs 66.000$`);
    break
    
    default:
    alert("We do not sell this car, sorry!");
    break
}