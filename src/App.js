import { useEffect, useState, useRef } from "react";
import "./App.css";
import Auth from "./components/auth/Auth";
import { db } from "./config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [recipes, setRecipes] = useState([]);

  const titleRef = useRef(null);
  const [difficultyRating, setDifficultyRating] = useState(1);

  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState("");

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

  const onSubmitRecipe = async () => {
    await addDoc(recipesCollectionRef);
  };

  return (
    <div className="App">
      <Auth />

      <div>
        <label htmlFor="title">Title</label>
        <input
          type="radio"
          placeholder="title"
          id="title"
          ref={titleRef.current.value}
        />

        <input type="radio" name="ratings" id="level-1" value="1" />
        <label htmlFor="level-1">1</label>
        <input type="radio" name="ratings" id="level-1" value="2" />
        <label htmlFor="level-2">2</label>
        <input type="radio" name="ratings" id="level-1" value="3" />
        <label htmlFor="level-3">3</label>
        <input type="radio" name="ratings" id="level-1" value="4" />
        <label htmlFor="level-4">4</label>
      </div>
      <div>
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <h1>Title: </h1>
              <h2>{recipe.title}</h2>
              <h3>Ingredients:</h3>
              <p>{recipe.ingredients}</p>
              <h3>Difficulty Rating:</h3>
              <p>{recipe.difficultyRating}</p>
              <h3>Directions:</h3>
              <p>{recipe.directions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
