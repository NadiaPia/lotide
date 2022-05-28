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

const myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;
console.log(myFn.someAttribute);

function runner(f) {
  f();
}

runner(myFn);
 