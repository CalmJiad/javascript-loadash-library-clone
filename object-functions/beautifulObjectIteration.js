// A beautiful nested object iteration example with Object.entries & Object.values
const cityFoods = {
  Tokyo: {
    favoriteFoods: {
      food1: "Sushi",
      food2: "Ramen",
      food3: "Tempura",
    },
  },
  Paris: {
    favoriteFoods: {
      food1: "Baguette",
      food2: "Croissant",
      food3: "Escargot",
    },
  },
  NewYork: {
    favoriteFoods: {
      food1: "Pizza",
      food2: "Cheesecake",
      food3: "Hot Dog",
    },
  },
  Mumbai: {
    favoriteFoods: {
      food1: "Vada Pav",
      food2: "Pav Bhaji",
      food3: "Biryani",
    },
  },
  Sydney: {
    favoriteFoods: {
      food1: "Tim Tam",
      food2: "Meat Pie",
      food3: "Flat White",
    },
  },
};

// Iterate through the nested object
for (const [city, foodData] of Object.entries(cityFoods)) {
  console.log(`City: ${city}`);

  for (const [foodKey, foodName] of Object.entries(foodData.favoriteFoods)) {
    console.log(`  - ${foodName}`);
  }
}

// Output will be:

// City: Tokyo
//   - Sushi
//   - Ramen
//   - Tempura
// City: Paris
//   - Baguette
//   - Croissant
//   - Escargot
// City: NewYork
//   - Pizza
//   - Cheesecake
//   - Hot Dog
// City: Mumbai
//   - Vada Pav
//   - Pav Bhaji
//   - Biryani
// City: Sydney
//   - Tim Tam
//   - Meat Pie
//   - Flat White
