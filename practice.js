const raisinAlarm = function(cookie) {
  for (let ingr of cookie) {
    if (ingr === "🍇") {
      return "Raisin alert!";      
    }    
  } return "All good!";
};




console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
 