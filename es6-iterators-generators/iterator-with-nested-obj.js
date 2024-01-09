// By iterating we will show the favourite foods according to the cities using our custom iterator

// A nested object of favourite foods by famous cities
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

// creating a custom iterator using JS Symbol.iterator factory function
cityFoods[Symbol.iterator] = () => {
  const cities = Object.keys(cityFoods);
  let currentCityIndex = 0;
  let currentFavouriteFoodIndex = 0;

  // storing our iterator functions
  // so that we can use the same iterator to loop through our nested values
  const iterator = {
    next: () => {
      if (currentCityIndex >= cities.length) return { done: true };
      const currentCity = cities[currentCityIndex];
      const favouriteFoods = Object.values(
        cityFoods[currentCity].favoriteFoods
      );

      if (currentFavouriteFoodIndex >= favouriteFoods.length) {
        currentCityIndex++;
        currentFavouriteFoodIndex = 0;
        // Looping again using the created iterator.next() function until all cities are done
        return iterator.next();
      }

      // Returning the default action with iterated value
      const value =
        currentFavouriteFoodIndex === 0
          ? `${currentCity}:\n  - ${
              favouriteFoods[currentFavouriteFoodIndex++]
            }`
          : `  - ${favouriteFoods[currentFavouriteFoodIndex++]}`;
      return { value, done: false };
    },
  };
  // Finally returning the whole iterator cause we have initiated all the custom functionalities inside the iterator variable
  return iterator;
};

// Our custom iterator is ready, now we can iterate over our nested object
for (const favouriteFood of cityFoods) {
  console.log(favouriteFood);
}

// Final output will be :

// Tokyo:
//   - Sushi
//   - Ramen
//   - Tempura
// Paris:
//   - Baguette
//   - Croissant
//   - Escargot
// NewYork:
//   - Pizza
//   - Cheesecake
//   - Hot Dog
// Mumbai:
//   - Vada Pav
//   - Pav Bhaji
//   - Biryani
// Sydney:
//   - Tim Tam
//   - Meat Pie
//   - Flat White

// --- We can also simply iterate through this nested object by using our simple way :-p ---

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
