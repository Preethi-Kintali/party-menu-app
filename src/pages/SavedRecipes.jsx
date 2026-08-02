import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { useSavedRecipes } from "../context/SavedRecipesContext";
import "../styles/saved.css";

function SavedRecipes() {
    const {
        savedRecipes,
        removeRecipe,
    } = useSavedRecipes();

    if (savedRecipes.length === 0) {
        return (
            <div>
                <h1>Saved Recipes</h1>

                <p>No saved recipes yet.</p>

                <Link to="/">
                    Browse Menu
                </Link>
            </div>
        );
    }

    return (
        <div>

            <h1>Saved Recipes</h1>

            <p>{savedRecipes.length} Recipes Saved</p>

            <Link to="/">
                ← Back to Menu
            </Link>

            <div className="saved-grid">

                {savedRecipes.map(recipe => (

                    <div key={recipe.id}>

                        <FoodCard item={recipe} />

                        <button
                            onClick={() => removeRecipe(recipe.id)}
                        >
                            Remove
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default SavedRecipes;