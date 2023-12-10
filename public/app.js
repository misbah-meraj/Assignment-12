//Alerts-1
alert("Welcome to the math quiz");

var question1 = parseInt(prompt("4 + 4?"));
var question2 = parseInt(prompt("4 + 5?"));
var question3 = parseInt(prompt("4 - 4?"));
var question4 = parseInt(prompt("4 - 2?"));

var total = 0;

if (question1 === 8) {
  total += 25;
  console.log("Question 1: Correct");
}

if (question2 === 9) {
  total += 25;
  console.log("Question 2: Correct");
}

if (question3 === 0) {
  total += 25;
  console.log("Question 3: Correct");
}

if (question4 === 2) {
  total += 25;
  console.log("Question 4: Correct");
}

if (total >= 50) {
  alert("You Passed! Your Result: " + total);
} else {
  alert("You Failed. Your Result: " + total);
}
 

//Variables for Strings-2
 
var firstName = "aliza";
var lastName = "anwar";
console.log(firstName ,lastName );


//Variables for Numbers-3

 var originalNum = 23;
 var numToBeAdded = 7;
 console.log(originalNum + numToBeAdded );


//Variable Names Legal and Illegal-4

// var 10person (illegal)
// var person-1 (illegal)
// var $person (illegal)
// var pe%rson (illegal)
// var pe*rson (illegal)
// var person name (illegal)
// var alert (illegal)

// var person10 (legal)
// var person_1 (legal)



// Math expressions:Familiar operators-5

// // way 1
var weight = 150;
console.log(weight + 25)
// //way 2
var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;
console.log(newNum)
// // way 3
var merchTotal = 100;
var shippingCharge = 10;
console.log( orderTotal = merchTotal * shippingCharge);
// // way 4
 var num = 10;
 var anotherNum = 1;
  var popularNumber = num - anotherNum;
  console.log(popularNumber);
 //// way 5
  var originalNum = 4;
var numToBeAdded = 2;
var newNum = originalNum / numToBeAdded;
console.log(newNum)



//Math expressions:Unfamiliar operators-6

var abc = 9;
var xyz = ++abc
console.log(xyz)

var num = 1;
var newNum = num++;
console.log(newNum)

var abc = 9;
var xyz = --abc
console.log(xyz)

var num = 1;
var newNum = num--;
console.log(newNum)

var a = 25;
var b = ++a;
var b = a - 1;
console.log(a, "first value");
console.log(a * 2);

var a = 10;
var b = 12;
var a = b++;
console.log(a, "B value");


//  Math expressions:Eliminating ambiguity-7

 var cost1 = 1;
 var cost2 = 3;
 var cost3 = 4;

 var totalCost = (cost1 + cost2) * cost3;

 console.log(totalCost)


// Concatenating text strings -8

var name = "Aiza";
var age = 21 ;

alert("my name is " + name + " my age is "  + age);


//Prompts-9

var username = prompt("EnterYourName");
var age = prompt("EnterYourAges");
console.log(username, age);

 var question = "Your species?";
 var defaultAnswer = "human";
 var spec = prompt(question, defaultAnswer);


 //if statements-10

var age = 20
if( age == "20"){
  console.log("condition true");
}


//Comparison operators-11

1.
var a = 100
var b = "100"
if( a === b){
  console.log("condition false");
}

2.
var age = 20;
if (age != 40) {
  console.log("Condition True");
}

3.
var a = 2
var b = "2"
console.log( 2 !== "2");

4.
console.log( 2 > 4);
console.log( 20 > 4);

5.
console.log( 20 >= 40);
console.log( 20 >= 20);

6.
console.log( 20 <= 40);
console.log( 20 <= 20);


//if...else and else if statements-12

var age= 15;
 var studentCard = false ;

if (age >=18) {
  console.log("Allow");
}else if (studentCard == true){
  console.log ("Allow on student card");
}else {
  console.log("Not Allowed");
}

//Testing sets of conditions-13

var weight = 500
var time = 4
var age = 19
var gender = "male"

if (weight > 300 && time < 6 && age > 17 && gender === "male") {
  alert("Come to our tryout!");
  }
  else {
  alert("Come to our cookout!");
  }

// if statements nested-14

var age = 18;
var cnic = true;
var studentCard = true;

if (age >= 18 && cnic == true) {
  console.log("Allow");
}
if (age <= 18 || studentCard == true) {
  console.log("Allow");
} else {
  console.log("Not Allowed");
}


//Arrays-15

var cities = ["Islamabad", "Faisalabad", "Multan", "Karachi", "Hyderabad", "Sialkot"];
alert("Welcome to " + cities[3]);


var a = "A";
var a = "B";
var a = "C";

var arr = ["A", "B", "C"];
console.log (arr);

arr[1] = "anum";
 console.log(arr);


//Arrays:Adding and removing elements-16
1.
var arr = ["A", "B", "C", "D", "E", "F"];
arr.push("anum");  
console.log(arr);

2.
var arr = ["A", "B", "C", "D", "E", "F"];
arr.pop("anum");  
console.log(arr);


//Arrays:Removing, inserting,and extracting elements-17

1.
var arr = ["A", "B", "C", "D", "E", "F"];
arr.shift ();
 console.log(arr)

 2.
 var arr = ["A", "B", "C", "D", "E", "F"];
 arr.unshift ("1");
  console.log(arr)

3.
var arr = ["A", "B", "C", "D", "E", "F"];
var a = arr.slice(1,4);
 console.log(a);

 4.
 var arr = ["A", "B", "C", "D", "E", "F"];
 var a = arr.splice(2, 2 , "1", "2", "3","4" );
console.log(a);










// var fullName = "Mark Myers";
// var  firstName = "Mark";

// if (fullName === firstName + " " + "Myers") {
//   console.log("Condition True");
// }

//else if

// var x = 2
// var y = 2
// var a = 8
// var b  = 4

// if (x + y === a - b) {

//   console.log ("Condition True");
// }
/// chapter-12

//  var x = prompt("Where does the Pope live?");
//  if (x === "Vatican") {
//  alert("Correct!");
//  }
//  if (x !== "Vatican") {
//  alert("Wrong answer");
//  }

//
//  var weight = 500
//  var time = 4
//  var age = 19
//  var gender = "male"

//  if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//    alert("Come to our tryout!");
//    }
//    else {
//    alert("Come to our cookout!");
//    }

//


// var Subject1 = 50
// var Subject2 = 0
// var Subject3 = 50

// if (( Subject1 === 50 || Subject2 === 50) && Subject3 === 50) {
//   var Total = Subject1 + Subject2 + Subject3;
//   console.log("Total Marks  " +  Total)
// } else {
//   console.log("You Are Fail")
// }
  
// var range = 9000
// var Days = 3


// if (range <= 10000){
//   if(Days <= 3){
//       console.log("Quetta")
//   }
//   if(Days >= 10){
//     console.log("Islamabad")
//   }
// }else{
//   console.log("Please Increase Your Amount")
// }
