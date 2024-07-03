import React, { useState } from 'react';
import PreviousSearches from "../components/PreviousSearches";
import RecipeCard from "../components/RecipeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Recipes(){
    const [searchTerm, setSearchTerm] = useState('');
    const initialRecipes = [
        {
            title: "Chicken Pan Pizza",
            image: "/img/gallery/img_15.jpg",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_17.jpg",
        },
        {
            title: "American Cheese Burger",
            image: "/img/gallery/img_5.jpg",
        },
        {
            title: "Mutton Biriyani",
            image: "/img/gallery/img_6.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_10.jpg",
        },
        {
            title: "Panner Butter Masala",
            image: "/img/gallery/img_11.jpg",
        },
        {
            title: "Fish Curry",
            image: "/img/gallery/img_12.jpg",
        },
        {
            title: "Dhaba Style Keema",
            image: "/img/gallery/img_13.jpg",
        },
        {
            title: "Dal Tadka | Dal Fry",
            image: "/img/gallery/img_14.jpg",
        },
    ];

    const [recipes, setRecipes] = useState(initialRecipes);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        if(e.target.value === '') {
            setRecipes(initialRecipes);
        } else {
            const filteredRecipes = initialRecipes.filter(recipe => 
                recipe.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setRecipes(filteredRecipes);
        }
    };

    return (
        <div>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button className="btn" onClick={() => handleSearch({target: {value: searchTerm}})}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}