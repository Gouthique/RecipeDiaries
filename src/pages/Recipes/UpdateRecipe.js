import React from "react";
import {useParams,useNavigate} from "react-router-dom";
import axios from "axios";
const { useState,useEffect } = require("react");


function UpdateRecipe () 
      {
        const { id } = useParams();
        const [name,setName] = useState("");
        const [preptime,setPreptime] = useState("");
        const [cooktime,setCooktime] = useState("");
        const [servings,setServings] = useState("");
        const [ingredients,setIngredients] = useState("");
        const [directions,setDirections] = useState("");
        const [error,setError] = useState("");
        const navigate = useNavigate();

        useEffect(() => {
            axios.get("http://localhost:5000/api/recipes/getRecipe/"+id)
                .then((response) => {
                    console.log(response.data);
                    setName(response.data.name);
                    setPreptime(response.data.preptime);
                    setCooktime(response.data.cooktime);
                    setServings(response.data.servings);
                    setIngredients(response.data.ingredients);
                    setDirections(response.data.directions);
                console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        , []);

        const Update = (e) => {

            e.preventDefault();
            // // Validation for numbers
            // if (isNaN(preptime) || preptime === "") {
            //     setError("Preparation time must be a number.");
            //     return;
            // }
            // if (isNaN(cooktime) || cooktime === "") {
            //     setError("Cooking time must be a number.");
            //     return;
            // }
            // if (isNaN(servings) || servings <= 0) {
            //     setError("Servings must be a positive number.");
            //     return;
            // }   
            // // Reset error message
            axios.put("http://localhost:5000/api/recipes/updateRecipe/"+id, {name,preptime,cooktime,servings,ingredients,directions})
            .then(result => {
                navigate("/myrd");
                console.log(result);
                setError(""); // Clear any previous errors
            }
            )
            .catch(err => {
                console.error(err);
                setError("Failed to update recipe.");
            }
            );
        }


        return (
            <div className="recipe-creation-container">
              <div className="rcc2">
                <form className="recipe-c-form" onSubmit={Update}>
                  <h2>Update Recipe</h2>
                  <div className="rccform">
                    <label htmlFor="recipeName">Recipe Name</label>
                    <input type="text" id="recipeName" placeholder="Enter Recipe Name" className="form-control" 
                    value = {name} onChange={(e)=>setName(e.target.value)}/>
                  </div>
                  <div className="rccform">
                    <label htmlFor="prepTime">Preparation Time</label>
                    <input type="text" id="prepTime" placeholder="Enter Preparation Time" className="form-control" 
                    value = {preptime} onChange={(e)=>setPreptime(e.target.value)}/>
                  </div>
                  <div className="rccform">
                    <label htmlFor="cookTime">Cooking Time</label>
                    <input type="text" id="cookTime" placeholder="Enter Cooking Time" className="form-control" 
                    value = {cooktime} onChange={(e)=>setCooktime(e.target.value)}/>
                  </div>
                  <div className="rccform">
                    <label htmlFor="servings">Servings</label>
                    <input type="number" id="servings" placeholder="Number of Servings" className="form-control" 
                   value={servings} onChange={(e)=>setServings(e.target.value)}/>
                  </div>
                  <div className="rccform">
                    <label htmlFor="ingredients">Ingredients</label>
                    <textarea id="ingredients" placeholder="List Ingredients" className="form-control"
                    value = {ingredients} onChange={(e)=>setIngredients(e.target.value)}></textarea>
                  </div>
                  <div className="rccform">
                    <label htmlFor="directions">Directions</label>
                    <textarea id="directions" placeholder="Cooking Instructions" className="form-control"
                    value = {directions} onChange={(e)=>setDirections(e.target.value)}></textarea>
                  </div>
                  <button type="submit" className="btn btn-success">Update</button>
                </form>
              </div>
            </div>
          )
        
    } 

export default UpdateRecipe;