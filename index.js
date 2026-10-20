
// Global-scoped variables
let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Function to change the featured drink
function changeFeaturedDrink() {
  featuredDrink = "Chocolate Milkshake";
}

// Function to add a new burger
function addBurger() {
  // Function-scoped variable
  var newBurger = "Flatburger";

  // Add the new burger to the array
  burgers.push(newBurger);
}

// Call the functions
changeFeaturedDrink();
addBurger();

// Display the results
console.log(burgers);
console.log(featuredDrink);
