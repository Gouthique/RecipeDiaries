// RecipeCard.js
import React from 'react';


function formatTitle(title) {
    const titleWords = title.split(' ');
    if (titleWords.length > 2) {
      return `${titleWords.slice(0, 2).join(' ')}...`;
    }
    return title;
  }

export default function apirecomendercards({ recipe }) {
  return (
    <div className="recipe-card">
        
      <img src={recipe.image} alt={recipe.label} className="recipe-image" />
      <div className="recipe-details">
      <div >
      <h3 className="recipe-title">{formatTitle(recipe.label)}</h3>
      <p className="recipe-source">Source: {recipe.source}</p> 
        <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="recipe-link">View Recipe</a>
      </div>
      </div>
    </div>
  );
}