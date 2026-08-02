import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSavedRecipes } from "../context/SavedRecipesContext";

function Header() {
  const { user, logout } = useAuth();
  const { savedRecipes } = useSavedRecipes();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/signin");
  }

  return (
    <header>
      <div>
        <h2>Party Menu</h2>
        <p>Welcome, {user?.name}</p>
      </div>

      <div>
        <Link to="/saved-recipes">
          Saved Recipes ({savedRecipes.length})
        </Link>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
