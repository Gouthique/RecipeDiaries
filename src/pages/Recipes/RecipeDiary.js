import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";
import { Link,useParams } from "react-router-dom";
// import "C:/Users/gouth/Downloads/Recipe-diaries/RecipeDiaries/src/styles/partials/_RecipeDiary.scss"
function RecipeDiary () 
    {

        const [recipes, setRecipes] = useState([{
            Name: ""
          }])
          const { id } = useParams();
    const [setName] = useState("");
    const [setPreptime] = useState("");
    const [setCooktime] = useState("");
    const [setServings] = useState("");
    const [setIngredients] = useState("");
    const [setDirections] = useState("");
    //const [setError] = useState("");
    // const navigate = useNavigate();
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
    );
          useEffect(() => {
            axios.get("http://localhost:5000/api/recipes/getRecipes")
                .then((response) => {
                    console.log(response.data);
                    setRecipes(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        , []);

        const handleDelete = (id) => {
            axios.delete(`http://localhost:5000/api/recipes/deleteRecipe/${id}`)
                .then((response) => {
                    console.log(response);
                    //setRecipes(recipes.filter((recipe) => recipe._id !== id));
                    window.location.reload();
                })
                .catch((error) => {
                    console.error(error);
                });
        }

            return (
                <div className="RecipeDiary-container">
                <div >
                    <div className="gap">
                <Link to="/createrecipe" className='btn btn-success' >Create Your Recipe +</Link> </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Prep Time</th>
                        <th>Cook Time</th>
                        {/* <th>Age</th>  */}
                        <th>Action</th>
                      </tr>
                    </thead>
                     <tbody>{

                            recipes.map((recipe) => {
                                return (
                                    <tr>
                                        {/* <td><a href="/recipepage/:id"><strong>{recipe.name}</strong></a></td> */}
                                        <td><Link to={`/recipepage/${recipe._id}`}><strong>{recipe.name}</strong></Link></td>
                                        <td><strong>{recipe.preptime}</strong> mins</td>
                                        <td><strong>{recipe.cooktime}</strong> mins</td>
                                        {/* <td>{recipe.servings}</td>
                                        <td>{recipe.ingredients}</td>
                                        <td>{recipe.directions}</td> */}
                                        {/* <td>{recipe.name}</td> */}
                                        <td>
                                            <Link to={`/updaterecipe/${recipe._id}`} className="Edit-R-button">Update</Link>
                                            {/* // <button >Edit</button> */}
                                            <Link onClick={(e) => handleDelete(recipe._id)} className="Delete-R-button">Delete</Link>
                                            {/* <button >Delete</button> */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                     </tbody>
                     </table>
                     </div>
                     </div>

            )
    } 

export default RecipeDiary;