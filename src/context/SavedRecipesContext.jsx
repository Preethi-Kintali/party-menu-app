import { createContext, useContext, useEffect, useState } from "react";

const SavedRecipesContext = createContext();

export function SavedRecipesProvider({ children }) {
  const [savedRecipes, setSavedRecipes] = useState(() => {
    return JSON.parse(
      localStorage.getItem("party_menu_saved_recipes")
    ) || [];
  });

  useEffect(() => {
    localStorage.setItem(
      "party_menu_saved_recipes",
      JSON.stringify(savedRecipes)
    );
  }, [savedRecipes]);

  function addRecipe(recipe) {
    if (!savedRecipes.some(item => item.id === recipe.id)) {
      setSavedRecipes([...savedRecipes, recipe]);
    }
  }

  function removeRecipe(id) {
    setSavedRecipes(savedRecipes.filter(item => item.id !== id));
  }

  return (
    <SavedRecipesContext.Provider
      value={{
        savedRecipes,
        addRecipe,
        removeRecipe,
      }}
    >
      {children}
    </SavedRecipesContext.Provider>
  );
}

export function useSavedRecipes() {
  return useContext(SavedRecipesContext);
}
