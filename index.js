
// Step 1: Global-scoped variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Step 2: Add a burger using a function-scoped variable
function addBurger() {
  const newBurger = "Flatburger";
  burgers.push(newBurger);

  // Step 3: Add another burger using block scope
  if(true) {
    const anotherNewBurger = "Maple Bacon Burger";
    burgers.push(anotherNewBurger);
  }
}

// Step 4: Change the featured drink
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}
