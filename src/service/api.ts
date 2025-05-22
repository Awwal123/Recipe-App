// src/api.ts
import axios from "axios";

const SPOONACULAR_API_KEY = "8e65ad3e90de48fcb358b80e0d02bfab";
const BASE_URL = "https://api.spoonacular.com";

const spoonacular = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: SPOONACULAR_API_KEY,
  },
});

export const getRandomRecipes = async (number = 30) => {
  const response = await spoonacular.get("/recipes/random", {
    params: {
      number,
    },
  });

  return response.data.recipes;

};
export const getRecipeDetails = async (id: string | number) => {
  const response = await spoonacular.get(`/recipes/${id}/information`);
  return response.data;
};
