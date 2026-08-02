import { Link } from "react-router-dom";

function FoodCard({ item }) {
  return (
    <Link to={`/menu/${item.id}`}>

      <div>

        <img
          src={item.image}
          alt={item.name}
        />

        <p>
          {item.isVeg ? "Veg" : "Non-Veg"}
        </p>

        <p>{item.category}</p>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <small>{item.servings}</small>

      </div>

    </Link>
  );
}

export default FoodCard;
