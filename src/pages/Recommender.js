import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecipeCard from '../components/apirecomendercards'; // Ensure this import path is correct


function Recommender() {
    const [ingredient, setIngredient] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searched, setSearched] = useState(false); // Track if user has searched
    const [initialVisit, setInitialVisit] = useState(true); // State variable to track initial visit

    const APP_ID = "6c301688"; // Your actual Application ID
    const APP_KEY = "0b4e66a68e164a6ebb069c11f6d3295f"; // Your actual Application Key

    useEffect(() => {
        // Apply background animation when the component mounts
        const body = document.body;
        body.style.margin = '0';
        body.style.padding = '0';
        body.style.height = '100vh';
        body.style.background = "url('https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center fixed";
        body.style.backgroundSize = 'cover';
        body.style.animation = 'backgroundScroll 60s linear infinite alternate';

        // Define keyframes for background animation
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = `
            @keyframes backgroundScroll {
                from { background-position: center top; }
                to { background-position: center bottom; }
            }
        `;
        document.head.appendChild(styleSheet);

        // Mark the initial visit as false after 5 seconds
        const timer = setTimeout(() => {
            setInitialVisit(false);
        }, 5000);

        return () => {
            // Revert styles and clear timer when component unmounts
            body.style = '';
            document.head.removeChild(styleSheet);
            clearTimeout(timer);
        };
    }, []);

    const fetchRecipes = async () => {
        if (!ingredient) return; // Don't fetch if the ingredient input is empty

        setIsLoading(true);
        setSearched(true); // User has made a search
        const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            setRecipes(data.hits.map(hit => hit.recipe));
        } catch (error) {
            console.error('Error fetching recipes:', error);
            setRecipes([]);
        }
        setIsLoading(false);
    };

    return (
        <div className="recommender">
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Enter an ingredient"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    onKeyPress={(e) => { if (e.key === 'Enter') fetchRecipes(); }}
                    className="ingredient-input"
                />
                <button onClick={fetchRecipes} disabled={isLoading} className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="recipes-container">
                {isLoading ? (
                    <div className="loading-message">Loading...</div>
                ) : recipes.length > 0 ? (
                    recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe} />)
                ) : (
                    // Show different message based on initial visit and search status
                    initialVisit && !searched ? (
                        <div className="initial-visit-message">
                            <h3>Welcome to Our Recipe Recommender!</h3>
                            <p>Enter an ingredient to discover delicious recipes.</p>
                        </div>
                    ) : (
                        <div className="no-recipes-found">
                            <img src="http://placekitten.com/200/300" alt="No recipes found" className="no-recipes-image" />
                            <h3>Oops!</h3>
                            <p>It seems there are no recipes matching your search.</p>
                            <p>Why not try a different ingredient?</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Recommender;
