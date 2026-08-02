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

            <Link to="/">← Back to Menu</Link>

            <Link to="/saved-recipes">
                Saved Recipes ({savedRecipes.length})
            </Link>

            <img
                src={item.image}
                alt={item.name}
            />

            <h1>{item.name}</h1>

            <p>{item.category.toUpperCase()}</p>

            <p>{item.isVeg ? "Veg" : "Non-Veg"}</p>

            <p>{item.servings}</p>

            <button onClick={handleSaveRecipe}>
                {isSaved ? "Saved" : "Save Recipe"}
            </button>

            <h2>Description</h2>

            <p>{item.fullDescription}</p>

            <h2>Ingredients</h2>

            <ul>
                {item.ingredients.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.name} - {ingredient.quantity}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default FoodDetail;