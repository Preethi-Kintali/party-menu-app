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
      <div className="header-left">
        <h2>Party Menu</h2>
        <p className="user-welcome">Welcome, {user?.name || "Admin User"}</p>
      </div>

      <div className="header-right">
        <Link to="/saved-recipes" className="saved-nav-btn">
          <span>Saved Recipes</span>
          {savedRecipes.length > 0 && (
            <span className="saved-badge-pill">{savedRecipes.length}</span>
          )}
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
