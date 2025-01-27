import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [recipes, setRecipes] = useState([]);

  const recipesCollectionRef = collection(db, "recipes");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipeData = await getDocs(recipesCollectionRef);
        const filteredRecipes = recipeData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setRecipes(filteredRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="App">
      <Auth />

      <div>
        <label htmlFor="title">Title</label>
        <input placeholder="title" id="title" />
        <label placeholder="difficulty selector" htmlFor="difficulty">
          Choose the difficulty level:
        </label>
        <select name="ratings" id="difficulty selector">
          <option value="">-- Please choose a difficulty rating --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4</option>
        </select>
      </div>
      <div>
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h1>Title: {recipe.title}</h1>
              <h3>Ingredients: {recipe.ingredients}</h3>
              <h3>Difficulty Rating: {recipe.difficultyRating}</h3>
              <h3>Directions: {recipe.directions}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
