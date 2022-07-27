import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Recipe = () => {
  const dipatch = useDispatch();

  const getRecipies = () => {
    try {
      const data = [
        { recipe: "Pizza", ingredients: ["cheese", "tomato", "sauce"] },
        { recipe: "Pasta", ingredients: ["cheese", "tomato", "sauce"] },
      ];
      const action = { type: "ADD_RECIPE", payload: data };
      dipatch(action)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipies();
  }, []);

  return (
    <div>
      <h1>Recipe</h1>
    </div>
  );
};

export default Recipe;
