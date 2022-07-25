import { useState } from "react";
import RecipeCard from "./RecipeCard";
import Search from "./Search";

const Recipe = () => {
  const [recipies, setRecipies] = useState([]);
  console.log(recipies);

  return (
    <div class=" h-full">
      <Search setRecipies={setRecipies} />
      <div class="container mx-auto p-4">
        <div class="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {
            recipies.map((recipe) => {
              return <RecipeCard recipe={recipe} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Recipe;
