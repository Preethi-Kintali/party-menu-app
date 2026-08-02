import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import { useSavedRecipes } from "../context/SavedRecipesContext";
import "../styles/saved.css";

function SavedRecipes() {
    const { savedRecipes, removeRecipe } = useSavedRecipes();

    if (savedRecipes.length === 0) {
        return (
            <div className="saved-page">

                <div className="saved-header">
                    <div>
                        <h1>Saved Recipes</h1>
                        <p>0 recipes saved</p>
                    </div>

                    <Link className="back-btn" to="/">
                        Back to Menu
                    </Link>
                </div>

                <div className="empty-state">
                    <p className="empty-text">
                        No saved recipes yet.
                    </p>

                    <Link className="browse-link" to="/">
                        Browse the menu
                    </Link>
                </div>

            </div>
        );
    }

    return (
        <div className="saved-page">
            <div className="saved-header">
                <div>
                    <h1>Saved Recipes</h1>
                    <p>{savedRecipes.length} recipes saved</p>
                </div>

                <Link className="back-btn" to="/">
                    ← Back to Menu
                </Link>
            </div>

            <div className="saved-grid">
                {savedRecipes.map((recipe) => (
                    <FoodCard
                        key={recipe.id}
                        item={recipe}
                        showRemove={true}
                        onRemove={() => removeRecipe(recipe.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default SavedRecipes;