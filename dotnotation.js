// let myName = "Zian";
// console.log(myName);
// console.log(myName.length);
// console.log("Zian Waqas Javed" .length);

// console.log(myName.toLowerCase());
// console.log(Math.random()*10);
// console.log(Math.ceil(Math.random()*6));


//console.log ("  |  | \n  |  | \n  |  | \n---------- \n  |  | \n  |  | \n  |  | \n---------- \n  |  | \n  |  | \n  |  | ");

//console.log("All around the world".charAt(0).toUpperCase());

 //let favDrink = "Coffee";
// console.log(favDrink);
// console.log("My least favourite drink is " + favDrink); 
//console.log(`My least favourite drink is ${favDrink} b/c it's bad`)

//Activity 1 
// let myName = "Zian";
// let age =  30;
// let favColor = "purple"; 

// console.log(`Hi! My name is ${myName} and I am ${age} years old, and my favourite colour is ${favColor}.`);
// console.log("--------------------------")
// console.log(`Hi! My name is ${myName.toUpperCase()} and the last letter in my name is ${myName.charAt(3).toUpperCase()} .I am ${age} years old, and my favourite colours length is ${favColor.length}.`);


//Activity 2 

// var breakfast = "pancakes";
// var lunch = "chicken wrap";
// var dinner = "salmon";

// console.log(`In the morning I will eat ${breakfast}, and then for lunch I will have a ${lunch}, and then finally at night I might have a ${dinner}.`);

// var breakfast = "eggs";
// var lunch = "chicken salad";
// var dinner = "pizza";
// console.log("-------------------------- \n--------------------------")

// console.log(`In the morning I will eat ${breakfast}, and then for lunch I will have a ${lunch}, and then finally at night I might have a ${dinner}.`);


// Activity 3
// var currentDate = Date.parse("2022, 01 , 11") 
// var birthday = Date.parse("2022, 06 , 27") 
// var diff = new Date(birthday - currentDate)
// var days = diff/1000/60/60/24

// console.log(Math.floor(days))


//Activity 4

// let gridT = [["x","x","x"],
//             ["o","x","o"],
//             ["x","o","o"]];

// console.log(gridT[0][1]);
// console.log(gridT[1][2]);
// console.log(gridT[0][0]);










///////////////////////////


// const grade = 87;
// switch (true){
//     case grade >=70:
//         console.log("Distinction");
//         break;
//     case grade >=60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Duper");
//         break;
//     default:
//         console.log("Failed");
        
// }

// let grade = 37; 

// if (grade >= 80) {
//     console.log("Distinction");
// }
// else if 
//     (grade >= 60){
//     console.log("Merit")
// }
// else if 
//     (grade >= 50){
//     console.log("Pass")
// }
// else {
//     console.log("Failed")
// }


// let age = 18;

// if (age >= 18 ){
//     console.log("Legal Drinking Age")
// }
// else {
//     console.log("Under Legal Drinking Age")
// }


//Challenge 1 

// var password = "Hotdog";
// // var password = "Hotdogggg";
// var character = password.length;

// if (character <= 8){
//     console.log("Your password is too short")
// }
// else {
//     console.log(password)
// }


//Challenge 2 

// var num = 15;


// if (num % 3 ==0  || num % 5 ==0){
//     console.log("This number is divisible by 3 or 5")
// }
// else{
//     console.log("This number is not divisible by 3 or 5")
// }


//Challenge 3
// var num = 10;

// if (num % 3 ==0  && num % 5 ==0){
//     console.log("fizz buzz")
// }
// else if (num % 5 == 0 ){
//     console.log("buzz")
// }
// else if (num % 3 ==0 ){
//     console.log("fizz ")
// }

//Challenge 4 

// let num = "20202";

// let numReverse = num.split("").reverse().join("");

// if (num === numReverse) {
//     console.log("your number is a palindrome");
// } 
// else {
//     console.log("your number is not a palindrome");
// }



//Challenge 5
//24 hour clock
// var time  = 16;
// var placeOfWork = "Liverpool";
// var townOfHome = "Manchester";

// if (time <= 7){
//     console.log(`I am still at ${townOfHome} getting ready for work!`)
// }

// else if ( time <= 9){
//     console.log(`I am on my way to work.`)
// }

// else if (time <= 15){
//     console.log(`I am currently at work in ${placeOfWork}!`)
// }

// else {
//     console.log(`I am back at home for the night in ${townOfHome}.`)
// }

//Challenge 6
 
// var random = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";



//Challenge 7 

// let word = "string";



// let balance = 1000; 
// let amount = 100; 
// let accnumber = 50449921;

// const cashWithdrawal = (amount, accnum) => {
//     balance -= amount; 
//     console.log(`Withdrawing ${amount} from account ${accnum}`)
//     console.log(balance);
// }

// cashWithdrawal(amount, accnumber)
// cashWithdrawal(amount, accnumber)
// cashWithdrawal(amount, accnumber)
// cashWithdrawal(amount, accnumber)


//Warm-up

// const result = (num1,num2) => {
//     return (num1**num2);
    
// }
// console.log(result(5,3));


//Array Example

// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// // console.log(coffeeOrder.length); // shows length
// // console.log(coffeeOrder[0].length); //get's length of an array item
// // coffeeOrder[1] = "Ann -Vanilla"; // changes the array


// console.log(coffeeOrder.push("Donna - espresso"));


//1/13/2022 Activity 1 

// let favGames = ["Valorant",
//                 "Counter-Strike",
//                 "Super Smash Bros."
// ];

// favGames.push("Mortal Kombat")
// favGames.push("Warzone");


// for ( let i = 0; i<10; i++){
//     console.log(favGames);
// }



//1/13/2022 Activity 2

// for (let i =0; i<6; i++){
//     console.log(Math.floor((Math.random()*(49+1))*(Math.random())));
// }

//1/13/2022 Activity 3

// for (let i =9; i>=0; i--){
//     console.log(i);
// }

//1/13/2022 Activity 4

// let films = ["spirderman","batman","aquaman","wonderwoman"];

// const filmCheck = () =>{
//     for ( i = 0; i<films.length; i++);{
//     console.log(films);
// }
//     if (films[3]=="Ghostbusters"){
//         console.log("yey it's ghostbusters")
//     }
//     else{
//         console.log("booo, we want ghostbusters.")
//     }
// }

// filmCheck();

//1/13/2022 Activity 5

// for (i = 0; i<60; i++){
//     let x = Math.floor(Math.random()*29+1);
//     if (x % 7 ==0){
//         console.log("This number is divisible by 7")
//     }
//     else{
//         console.log("This number is not divisible by 7")
//     }
// }


//1/13/2022 Activity 6

//do...while creates a loop that continues the test until the condition evaluates to false.
// while loop creates a loop that continues the test until the condition evaluates to be true.
// for loop consists of three optional expressions that contain the condition of the loop




//1/13/2022 Activity 7
// let x = 2
// for ( i = 1; i<=10; i++){
//     if (i==1){
//         console.log("'1' is neither a prime number nor composite.")
//     }
//     else if (i==2){
//         console.log(`${i} this is a prime number`)
//     }
//     else if(i%x ===0){
//         console.log(`${i} is NOT a prime number`)
//     }
//     else {
//         console.log(`${i} this is a prime number`)
//     }
// }







//For Loop Examples
// let multiplesTwo = [0];
// for (let i = 0; i<20; i++){
//     if (i % 2 ==0){
//         console.log(multiplesTwo.push(i));
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are ${multiplesTwo}.`)



//while loop example
// let i = 0; 
// while (i<=120000){
//     console.log(i++);
// }


//Objects

// let drinks = ["pepsi", "coke", "fanta"];
// let drinkcost = [5,5,3];
// let balancce = 1000;
 
// let drinksAvailable = () => {
//     console.log(`This available drinks are ${drinks}`)
// }
// let cost = () => {
//     console.log(`This cost for each drink is $${drinkcost} and your remaining balance is $${balancce}`)
// }
// let availabe = () =>{
//     console.log("You've got good taste!")
// }



// return cost();





// const pet = {
//     name: "Pride",
//     typeOfPet: "Cat",
//     age: 2,
//     color: "Orange",
//     eat: () => {  //this type of arrow function method does not work in this context
//         console.log(`${this.name} is eating meat`);
//     },
//     drink:function (){
//         console.log(`${this.name} is drinking milk`);
//     }
// }

// pet.eat();
// pet.drink();











































