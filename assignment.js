// githun link goes here

//1) kilometerToMeter

function kilometerToMeter(n) {
    var convert = n * 1000;
    return convert;
}

var result = kilometerToMeter(5);
console.log(result);

//2) budgetCalculator

function budgetCalculator(num1, num2, num3) {
    var shirt = 100 * num1;
    var jacket = 300 * num2;
    var coat = 500 * num3;
    var sum = shirt + jacket + coat;
    return sum;
}
var total = budgetCalculator(2, 2, 2);
console.log(total);

//3) hotelCost

function hotelCost(cost){
    if(cost <= 10){
        var firstTen = cost * 100;
        return firstTen;
    }

    else if(cost <= 20){
        var firstTen = 10 * 100;
        var substraction = cost - 10;         
        var secondTen = substraction * 80;
        var totalCost = firstTen + secondTen;
        
        return totalCost;
    }
    else{
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var substraction = cost - 20;
        var third = substraction * 50;
        var totalCost = firstTen + secondTen + third;
        return totalCost; 
    }


}
var yourCost = hotelCost(25);
console.log(yourCost);

//4) megaFriend

function megaFriend(largeName){
    var large = "";
    for (i = 0; i < largeName.length; i++){
        var item = largeName[i];
        if( item.length > large.length){
            large = item;
        }
    }
    return large;
}
var cousinNames = ["daulat", "shamima", "Aktharuzzaman", "shojib"];
var theLargeName = megaFriend(cousinNames);
console.log(theLargeName);
