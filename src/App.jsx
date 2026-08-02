import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Menu from "./pages/Menu";
import FoodDetail from "./pages/FoodDetail";
import SavedRecipes from "./pages/SavedRecipes";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Menu />
          </ProtectedRoute>
        }
      />

      <Route path="/menu/:id" element={<FoodDetail />} />

      <Route path="/saved-recipes" element={<SavedRecipes />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;