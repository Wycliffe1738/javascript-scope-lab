
// Step 1: Global-scoped variables
let burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Step 2: Change the featured drink
function changeFeaturedDrink() {
  featuredDrink = "Chocolate Milkshake";
}

// Step 3: Add a burger using a block-scoped variable
function addBurger() {
  {
    let newBurger = "Flatburger";
    burgers.push(newBurger);
  }
}

// Call the functions
changeFeaturedDrink();
addBurger();
console.log(burgers);
console.log(featuredDrink);