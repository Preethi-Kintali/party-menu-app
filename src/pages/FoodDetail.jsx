import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMenuItemById } from "../data/menuData";
import { useSavedRecipes } from "../context/SavedRecipesContext";
import "../styles/detail.css";

function FoodDetail() {
    const { id } = useParams();

    const item = getMenuItemById(id);

    const {
        savedRecipes,
        addRecipe,
        removeRecipe,
    } = useSavedRecipes();

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        setIsSaved(savedRecipes.some(recipe => recipe.id === item?.id));
    }, [savedRecipes, item]);

    if (!item) {
        return <h2>Food Not Found</h2>;
    }

    function handleSaveRecipe() {
        if (isSaved) {
            removeRecipe(item.id);
        } else {
            addRecipe(item);
        }
    }

    return (
        <div className="detail-page">

            <div className="detail-header">

                <Link to="/" className="back-btn">
                    ← Back to Menu
                </Link>

                <div className="header-actions">
                    <Link to="/saved-recipes" className="saved-btn">
                        Saved Recipes
                    </Link>

                    <button
                        className={isSaved ? "saved-btn-active" : "save-btn"}
                        onClick={handleSaveRecipe}
                    >
                        {isSaved ? "✓ Saved" : "Save Recipe"}
                    </button>
                </div>

            </div>

            <div className="detail-top">

                <div className="detail-image">
                    <img
                        src={item.image}
                        alt={item.name}
                    />
                </div>

                <div className="detail-info">

                    <div className="tags">

                        <span className="category-tag">
                            {item.category}
                        </span>

                        <span
                            className={item.isVeg ? "veg-tag" : "nonveg-tag"}
                        >
                            {item.isVeg ? "🌿 Veg" : "🍖 Non-Veg"}
                        </span>

                    </div>

                    <h1>{item.name}</h1>

                    <p className="servings">
                        {item.servings}
                    </p>

                    <p className="description">
                        {item.fullDescription}
                    </p>

                </div>

            </div>

            <div className="ingredients-card">

                <h2>Ingredients</h2>

                <div className="ingredients-list">

                    {item.ingredients.map((ingredient, index) => (

                        <div
                            className="ingredient-item"
                            key={index}
                        >
                            <span>{ingredient.name}</span>

                            <span>{ingredient.quantity}</span>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default FoodDetail;