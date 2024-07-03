import React from 'react';
import { renderToString } from 'react-dom/server';
import RecipeDisplay from './RecipeDisplay';

const RecipeCard = ({ recipe }) => {
  const handleViewRecipe = () => {
    const recipeWindow = window.open('', '_blank');
    
    // Create a new document with the necessary structure
    const htmlString = renderToString(<RecipeDisplay recipe={recipe} />);
    recipeWindow.document.write(`
      <html>
        <head>
          <title>Recipe: ${recipe.title}</title>
          <link rel="stylesheet" type="text/css" href="URL_TO_YOUR_STYLESHEET">
          <!-- Include other stylesheets or scripts here -->
        </head>
        <body>
          ${htmlString}
          <script src="URL_TO_YOUR_REACT_BUNDLE"></script>
        </body>
      </html>
    `);
    recipeWindow.document.close();
  };

  return (
    <div className='recipes-container'>
<div className="recipe-card">
  <div className="custom-image">
    <img src={recipe.image} alt={recipe.title} />
  </div>
  <div className="recipe-content">
    <h3 className="recipe-title">{recipe.title}</h3>
    <p className="recipe-description">{recipe.description}</p>
  </div>
  <button className="view-recipe-btn" onClick={handleViewRecipe}>
    View Recipe
  </button>
</div>
</div>
  );
};

export default RecipeCard;


// import CustomImage from "./CustomImage"



// export default function RecipeCard({recipe}){
//     return (
//         <div className="recipe-card">
//             <CustomImage imgSrc={recipe.image} pt="65%"/>
//             <div className="recipe-card-info">
//                 <img className="auther-img" src={recipe.authorImg} alt=""/>
//                 <p className="recipe-title">{recipe.title}</p>
//                 <p className="recipe-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//                 <a className="view-btn" href="#!">VIEW RECIPE</a>
//             </div>
//         </div>
//     )
// }