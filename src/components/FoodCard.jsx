import { Link } from "react-router-dom";
import "../styles/foodcard.css";

function FoodCard({ item }) {
  return (
    <Link to={`/menu/${item.id}`}>

      <div className="food-card">

        <img
          src={item.image}
          alt={item.name}
        />

        <div className="food-content">
          <p className={`badge ${item.isVeg ? "veg" : "nonveg"}`}>
            {item.isVeg ? "Veg" : "Non-Veg"}
          </p>

          <p>{item.category}</p>

          <h3>{item.name}</h3>

          <p>{item.description}</p>

          <small className="servings">{item.servings}</small>
        </div>

      </div>

    </Link>
  );
}

export default FoodCard;
