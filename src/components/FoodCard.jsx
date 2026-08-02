import { Link } from "react-router-dom";
import "../styles/foodcard.css";

function FoodCard({ item, showRemove = false, onRemove }) {
    return (
        <Link
            to={`/menu/${item.id}`}
            className="food-card-link"
        >
            <div className="food-card">

                <div className="image-container">
                    <img
                        src={item.image}
                        alt={item.name}
                    />

                    <span className={`badge ${item.isVeg ? "veg" : "nonveg"}`}>
                        {item.isVeg ? "VEG" : "NON-VEG"}
                    </span>
                </div>

                <div className="food-content">

                    <p className="category">
                        {item.category.toUpperCase()}
                    </p>

                    <h3>{item.name}</h3>

                    <p className="description">
                        {item.description}
                    </p>

                    <p className="servings">
                        {item.servings}
                    </p>

                    {showRemove && (
                        <button
                            className="remove-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onRemove();
                            }}
                        >
                            Remove
                        </button>
                    )}

                </div>

            </div>
        </Link>
    );
}

export default FoodCard;