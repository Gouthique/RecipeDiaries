import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/recipes/getRecipe/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    document.body.classList.add("rp-background");

    return () => {
      document.body.classList.remove("rp-background");
    };
  }, []);

  if (!recipe) {
    return <div>Loading...</div>; // Show loading or no data message
  }

  const ingredientsArray = recipe.ingredients.split(',').map(ingredient => ingredient.trim());
  const directionsArray = recipe.directions.split(',').map(direction => direction.trim());

  return (
    <div className="recipe-page">
      <div className="recipe-container">
        <div className="recipe-header">
          <h1>{recipe.name}</h1>
          <p className="recipe-meta">
            <span>Prep {recipe.preptime} mins</span> • <span>Cook {recipe.cooktime} mins</span> • <span>Serves {recipe.servings}</span>
          </p>
        </div>
        <div className="recipe-content">
          <div className="ingredients">
            <h2>Ingredients</h2>
            <ul>
              {ingredientsArray.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="directions">
            <h2>Directions</h2>
            <ol>
              {directionsArray.map((direction, index) => (
                <li key={index}>{direction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
