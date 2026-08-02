import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NotFound() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>

      <Link to={isAuthenticated ? "/" : "/signin"}>
        {isAuthenticated ? "Back to Menu" : "Go to Sign In"}
      </Link>
    </div>
  );
}

export default NotFound;