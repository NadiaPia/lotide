/*const raisinAlarm = function(cookie) {
  for (let ingr of cookie) {
    if (ingr === "🍇") {
      return "Raisin alert!";      
    }    
  } return "All good!";
};




console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));*/

/*const myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);*/
 
const greeting = "Hello, world!" 
const objGreeting = new String("Hello, world!");

//console.log(typeof(greeting))
//console.log(typeof(objGreeting))

const checkIfNum = 5 
const objNum = new Number(5);

console.log(typeof(checkIfNum))
console.log(typeof(objNum))


//console.log(greeting == objGreeting); 
// => true

//console.log(greeting === objGreeting); 
// => false