import React from 'react';


const recipeDetails = {
  'Chicken Pan Pizza': {
    ingredients: [
      "1 tablespoon olive oil",
      "1/2 pound boneless, skinless chicken breast, cut into small pieces",
      "1/2 teaspoon garlic powder",
      "1/2 teaspoon dried basil",
      "1/4 teaspoon red pepper flakes (optional)",
      "Salt and pepper to taste",
      "1 pre-made pizza dough or your favorite homemade pizza dough",
      "1/2 cup pizza sauce",
      "1 cup mozzarella cheese, shredded",
      "1/2 cup parmesan cheese, grated",
      "Your choice of additional toppings: sliced bell peppers, onions, mushrooms, olives, etc.",
    ],
    directions: [
      "Preheat the oven to 475°F (245°C).",
      "In a pan, cook chicken with olive oil, seasonings until cooked through.",
      "Roll out the pizza dough to fit your pan or stone.",
      "Spread the pizza sauce, add cheeses, cooked chicken, and toppings.",
      "Bake for 10 to 12 minutes or until the crust is golden brown.",
    ],
    totalTime: '27 minutes',
    nutrition: [
      "calories: 500 kcal",
      "protein: 40g",
      "carbs: 20g",
      "fat: 30g",
      "fiber: 4g"
  ]
  },
  'Japanese Sushi': {
    ingredients: [
      "2 cups sushi rice",
      "2 1/2 cups water",
      "1/2 cup rice vinegar",
      "1 tablespoon sugar",
      "1 teaspoon salt",
      "Nori (seaweed sheets)",
      "Fresh fish (salmon, tuna), sliced into thin strips",
      "Vegetables (cucumber, avocado), sliced into thin strips",
      "Soy sauce, for serving",
      "Pickled ginger, for serving",
      "Wasabi, for serving",
    ],
    directions: [
      "Rinse the sushi rice until the water runs clear, then cook.",
      "Mix warm rice with rice vinegar, sugar, and salt.",
      "Spread rice on nori sheet, add fish and vegetables, and roll.",
      "Cut the roll into bite-sized pieces.",
      "Serve with soy sauce, pickled ginger, and wasabi.",
    ],
    totalTime: '30 minutes plus time for rice to cook and cool',
    nutrition: [
      "calories: 600 kcal",
      "protein: 40g",
      "carbs: 120g",
      "fat: 15g",
      "fiber: 8g"
    ]
  },
  'American Cheese Burger': {
    ingredients: [
      "1/2 pound ground beef",
      "Salt and pepper to taste",
      "2 slices cheese (American, Cheddar, or your choice)",
      "2 burger buns, split and toasted",
      "Lettuce, tomato, and onion slices",
      "Condiments such as ketchup, mustard, and mayonnaise",
    ],
    directions: [
      "Season the ground beef with salt and pepper and form into patties.",
      "Cook the patties on a grill or in a skillet to your desired doneness.",
      "Place a slice of cheese on each patty and let it melt.",
      "Assemble the burgers with the toasted buns, cooked patties, lettuce, tomato, onion, and condiments.",
    ],
    totalTime: '20 minutes',
    nutrition: [
      "calories: 1200 kcal",
      "protein: 60g",
      "carbs: 80g",
      "fat: 70g",
      "fiber: 5g"
    ]
  },
  'Spaghetti and Meatballs': {
    ingredients: [
      "1 pound spaghetti",
      "1 pound ground beef",
      "1/4 cup breadcrumbs",
      "1/4 cup grated Parmesan cheese",
      "1 egg",
      "2 cups marinara sauce",
      "Salt and pepper to taste",
      "Fresh basil for garnish",
    ],
    directions: [
      "Cook spaghetti according to package instructions.",
      "Mix ground beef, breadcrumbs, Parmesan, egg, salt, and pepper. Form into meatballs.",
      "Brown meatballs in a skillet, then pour marinara sauce over and simmer until cooked through.",
      "Serve spaghetti topped with meatballs and sauce. Garnish with fresh basil.",
    ],
    totalTime: '45 minutes',
    "nutrition": [
      "calories: 2000 kcal",
      "protein: 100g",
      "carbs: 200g",
      "fat: 90g",
      "fiber: 10g"
    ]
  },
  'Dal Tadka | Dal Fry': {
    ingredients: [
      "1 cup Toor dal (pigeon pea lentils)",
      "3 cups water",
      "2 tablespoons ghee or oil",
      "1 teaspoon cumin seeds",
      "1 medium onion, finely chopped",
      "1 tomato, finely chopped",
      "1 teaspoon ginger-garlic paste",
      "2 green chilies, slit",
      "1/2 teaspoon turmeric powder",
      "1 teaspoon coriander powder",
      "1/2 teaspoon garam masala",
      "Salt to taste",
      "Fresh coriander leaves for garnishing",
    ],
    directions: [
      "Rinse the dal thoroughly until water runs clear.",
      "Cook dal with turmeric and salt in 3 cups of water until soft.",
      "Heat ghee in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden. Add ginger-garlic paste and green chilies, cook for a minute.",
      "Add chopped tomatoes, coriander powder, and cook until oil separates.",
      "Add cooked dal, garam masala, and simmer for 5-7 minutes.",
      "Garnish with coriander leaves and serve hot.",
    ],
    totalTime: '50 minutes',
    nutrition: [
      "calories: 350 kcal",
      "protein: 18g",
      "carbs: 50g",
      "fat: 10g",
      "fiber: 15g"
    ]
  },
  'Dhaba Style Keema': {
    ingredients: [
      "1 pound ground meat (mutton or beef)",
      "2 tablespoons oil",
      "2 onions, finely chopped",
      "1 tablespoon ginger-garlic paste",
      "2 tomatoes, pureed",
      "1 teaspoon cumin seeds",
      "1 teaspoon coriander powder",
      "1/2 teaspoon turmeric powder",
      "1 teaspoon garam masala",
      "Salt to taste",
      "Chopped coriander leaves for garnish",
    ],
    directions: [
      "Heat oil in a pan, add cumin seeds and let them splutter.",
      "Add onions and fry until golden brown.",
      "Add ginger-garlic paste and sauté for a minute.",
      "Add tomato puree, coriander powder, turmeric, and salt. Cook until oil separates.",
      "Add ground meat and cook on high heat until browned.",
      "Lower the heat, cover and cook until meat is tender.",
      "Add garam masala and cook for another minute.",
      "Garnish with chopped coriander and serve hot.",
    ],
    totalTime: '1 hour',
    "nutrition": [
      "calories: 800 kcal",
      "protein: 50g",
      "carbs: 10g",
      "fat: 60g",
      "fiber: 2g"
    ]
  },
  'Fish Curry': {
    ingredients: [
      "1 pound fish fillets (any firm white fish)",
      "2 tablespoons oil",
      "1 teaspoon mustard seeds",
      "1 large onion, finely chopped",
      "1 tablespoon ginger-garlic paste",
      "2 tomatoes, finely chopped",
      "1 teaspoon turmeric powder",
      "1 teaspoon red chili powder",
      "1 teaspoon coriander powder",
      "1/2 teaspoon fenugreek seeds",
      "1 cup coconut milk",
      "Salt to taste",
      "Fresh coriander leaves for garnishing",
    ],
    directions: [
      "Heat oil in a pan, add mustard and fenugreek seeds and let them splutter.",
      "Add onions and sauté until translucent. Add ginger-garlic paste and cook for a minute.",
      "Add tomatoes, turmeric, chili, and coriander powder. Cook until oil separates.",
      "Add fish pieces and gently stir to coat them with the spices without breaking.",
      "Pour in coconut milk and simmer until the fish is cooked.",
      "Garnish with coriander leaves and serve hot.",
    ],
    totalTime: '30 minutes',
    nutrition: [
      "calories: 500 kcal",
      "protein: 40g",
      "carbs: 20g",
      "fat: 30g",
      "fiber: 4g"
    ]
  },
  'Panner Butter Masala': {
    ingredients: [
      "200 grams paneer (Indian cottage cheese), cubed",
      "3 tablespoons butter",
      "1 large onion, finely chopped",
      "3 tomatoes, pureed",
      "1 tablespoon ginger-garlic paste",
      "1 teaspoon cumin seeds",
      "1-2 green chilies, slit",
      "2 teaspoons Kashmiri red chili powder",
      "1 teaspoon garam masala",
      "1/2 teaspoon turmeric powder",
      "1 tablespoon coriander powder",
      "1 cup cream",
      "1 tablespoon dried fenugreek leaves (kasuri methi)",
      "Salt to taste",
      "Fresh coriander leaves for garnish",
    ],
    directions: [
      "Heat butter in a pan, add cumin seeds and let them splutter.",
      "Add onions and sauté until they are light golden brown.",
      "Add ginger-garlic paste and green chilies, and sauté for a minute.",
      "Add pureed tomatoes, chili powder, turmeric, coriander powder, and salt. Cook until oil begins to separate from the masala.",
      "Add paneer cubes and mix well with the masala without breaking them.",
      "Add cream and simmer for 5-7 minutes on low heat.",
      "Crush the kasuri methi in your hand and sprinkle over the curry. Mix well.",
      "Garnish with chopped coriander leaves and serve hot with naan or paratha.",
    ],
    totalTime: '40 minutes',
    nutrition: [
      "calories: 1200 kcal",
      "protein: 25g",
      "carbs: 20g",
      "fat: 100g",
      "fiber: 3g"
    ]
},
'Mutton Biriyani': {
    ingredients: [
      "500 grams mutton, cleaned and cut into pieces",
      "2 cups basmati rice",
      "4 cups water",
      "2 onions, thinly sliced",
      "2 tomatoes, chopped",
      "1/4 cup yogurt",
      "2 tablespoons ginger-garlic paste",
      "2-3 green chilies, slit",
      "1/2 cup fresh cilantro, chopped",
      "1/2 cup mint leaves, chopped",
      "1 tablespoon red chili powder",
      "1/2 tablespoon turmeric powder",
      "2 tablespoons biryani masala",
      "1/2 teaspoon garam masala",
      "Juice of 1 lemon",
      "4 tablespoons cooking oil",
      "2 tablespoons ghee (clarified butter)",
      "Salt to taste",
      "Whole spices (4 cloves, 3 cardamom pods, 2 bay leaves, 1 cinnamon stick)",
      "Saffron strands, soaked in 1/4 cup warm milk"
    ],
    directions: [
      "Wash the rice and soak for 30 minutes. Drain and set aside.",
      "Heat oil in a large pot, add whole spices, and sauté for a minute until fragrant.",
      "Add sliced onions and sauté until golden brown.",
      "Add ginger-garlic paste and green chilies, fry until raw smell disappears.",
      "Add mutton pieces, fry until they are browned.",
      "Mix in chopped tomatoes, yogurt, red chili powder, turmeric, biryani masala, and salt. Cook until oil separates.",
      "Add water, bring to a boil, then simmer until the mutton is 75% cooked.",
      "In another pot, heat ghee, add drained rice and fry for 2-3 minutes. Pour over the mutton mixture.",
      "Sprinkle saffron milk, garam masala, cilantro, mint leaves, and lemon juice.",
      "Cover and cook on a low flame for 20 minutes or until the rice is cooked and the mutton is tender.",
      "Let it rest for 10 minutes before serving. Fluff up the biryani with a fork and serve."
    ],
    totalTime: '2 hours',
    nutrition: [
      "calories: 1800 kcal",
      "protein: 70g",
      "carbs: 200g",
      "fat: 80g",
      "fiber: 8g"
    ]
}
};
const RecipeDisplay = ({ recipe }) => {
  const details = recipeDetails[recipe.title] || {
    ingredients: [],
    directions: [],
    totalTime: '',
    nutrition: []
  };
  
  return (
    <div className="recipe-display">
      <div className="recipe-header">
        {/* Ensure that the image property is provided in the recipe object */}
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <h1 className="recipe-title">{recipe.title}</h1>
      </div>
      <div className="recipe-body">
        <div className="recipe-section">
          <h3>Ingredients</h3>
          <ul className="ingredients-list">
            {details.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-section">
          <h3>Directions</h3>
          <ol className="directions-list">
            {details.directions.map((direction, index) => (
              <li key={index} className="direction-item">{direction}</li>
            ))}
          </ol>
        </div>
        <div className="recipe-info">
          <p className="total-time"><strong>Total Time:</strong> {details.totalTime}</p>
          <div className="nutrition-info">
            <h3>Nutrition Information</h3>
            <ul>
              {details.nutrition.map((nutrition, index) => (
                <li key={index} className="nutrition-item">{nutrition}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


  
  
//   return (
//     <div className="recipe-display">
//       <h1>{recipe.title}</h1>
//       <img src={recipe.image} alt={recipe.title} />
//       <h3>Ingredients:</h3>
//       <ul>
//         {details.ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient}</li>
//         ))}
//       </ul>
//       <h3>Directions:</h3>
//       <ol>
//         {details.directions.map((direction, index) => (
//           <li key={index}>{direction}</li>
//         ))}
//       </ol>
//       <p>Total Time: {details.totalTime}</p>
//     </div>
//   );


export default RecipeDisplay;
