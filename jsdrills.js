/*Hoisting and Functions */
// fname = 'April';
// var fname;
// console.log(fname); //declaration var fname hoisted above the initialization of fname

// fname1 = 'April';
// let fname1;
// console.log(fname1); //Error: Uncaught ReferenceError: can't access lexical declaration 'fname1' before initialization

/*SetName Function Practice*/
// setName();
// function setName() {
//     var name = 'April';
//     console.log(name);
// }
/* Function with Parameters Practice*/
console.log("Your average is"); //Prints first
let avg = avgNumbers(5, 10);
console.log("Your average is ", avg); //Prints third
function avgNumbers(num1, num2) {
  console.log("Your average is "); //Prints second (function is hoisted above line 19)
  var answer = (num1 + num2) / 2;
  return answer;
}

/* let's Practice Scoping */

const fruits = ["pineapple", "papaya", "kiwi"];
// let favFruit;
function printFruits(){
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
     let leastFavFruit = 'oranges';
        console.log(favFruit);
    } 
    printFavFruit();
    // console.log(leastFavFruit()); runs error
}



printFruits();

whatEverYouLike();
function whatEverYouLike(){  //function hoisted 
    console.log('Hello');
    console.log('April');
}
// console.log(getAvg(2,5));//throws and error
const getAvg = function (a,b) {
    return (a + b) / 2;
}
console.log(getAvg(2,5));