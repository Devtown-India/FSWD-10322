const app_id = "ac754aa6";
const app_key = "6f5b0ae94e91110bbb320e6a5a96f039";
const button = document.querySelector("button");
const input = document.querySelector("input");

const getRecipe = async (query) => {
  try {
    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const searchRecipe = () => {
  const query = input.value;
  getRecipe(query);
};

button.addEventListener("click", searchRecipe);
