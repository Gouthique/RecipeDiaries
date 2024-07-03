import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateRecipe () {
    const [name, setName] = useState("");
    const [preptime, setPreptime] = useState("");
    const [cooktime, setCooktime] = useState("");
    const [servings, setServings] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [directions, setDirections] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        
        // Validation for numbers
        if (isNaN(preptime) || preptime === "") {
            setError("Preparation time must be a number.");
            return;
        }
        if (isNaN(cooktime) || cooktime === "") {
            setError("Cooking time must be a number.");
            return;
        }
        if (isNaN(servings) || servings <= 0) {
            setError("Servings must be a positive number.");
            return;
        }

        // Reset error message
        setError("");

        axios.post("http://localhost:5000/api/recipes/createRecipe", {name,preptime,cooktime,servings,ingredients,directions})
        .then(result => {
            console.log(result);
            setSuccess("Recipe added successfully!");
            setError(""); // Clear any previous errors
            navigate("/myrd");
        })
        .catch(err => {
            console.error(err);
            setError("Failed to add recipe.");
            setSuccess(""); // Clear any previous success message
        });
     }
     

  return (
    <div className="recipe-creation-container">
      <div className="rcc2">
      {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form className="recipe-c-form" onSubmit={Submit}>
          <h2>Add Recipe</h2>
          <div className="rccform">
            <label htmlFor="recipeName">Recipe Name</label>
            <input type="text" id="recipeName" placeholder="Enter Recipe Name" className="form-control" 
            onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="rccform">
            <label htmlFor="prepTime">Preparation Time (minutes)</label>
            <input type="number" id="prepTime" placeholder="Enter Preparation Time" className="form-control" 
            value={preptime} onChange={(e)=>setPreptime(e.target.value)}/>
          </div>
          <div className="rccform">
            <label htmlFor="cookTime">Cooking Time (minutes)</label>
            <input type="number" id="cookTime" placeholder="Enter Cooking Time" className="form-control" 
            value={cooktime} onChange={(e)=>setCooktime(e.target.value)}/>
          </div>
          <div className="rccform">
            <label htmlFor="servings">Servings</label>
            <input type="number" id="servings" placeholder="Number of Servings" className="form-control" 
            value={servings} onChange={(e)=>setServings(e.target.value)}/>
          </div>
          <div className="rccform">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea id="ingredients" placeholder="List Ingredients" className="form-control"
            onChange={(e)=>setIngredients(e.target.value)}></textarea>
          </div>
          <div className="rccform">
            <label htmlFor="directions">Directions</label>
            <textarea id="directions" placeholder="Cooking Instructions" className="form-control"
            onChange={(e)=>setDirections(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn btn-success">Add Recipe</button>
        </form>
      </div>
    </div>
  )
}

export default CreateRecipe;
