import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSavedRecipes } from "../context/SavedRecipesContext";
import "../styles/header.css";

function Header() {
  const { user, logout } = useAuth();
  const { savedRecipes } = useSavedRecipes();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/signin");
  }

  return (
    <header className="header">
      <div>
        <h2>Party Menu</h2>
        <p>Welcome, {user?.name}</p>
      </div>

      <div className="header-right">
        <Link to="/saved-recipes">
          Saved Recipes ({savedRecipes.length})
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
