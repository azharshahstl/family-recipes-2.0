import { useEffect, useState, useRef } from "react";
import DifficultyRatingScore from "./components/difficulty-rating/DifficultyRatingScore.tsx";
import "./App.css";
import Auth from "./components/auth/Auth.tsx";
import { db } from "./config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [recipes, setRecipes] = useState([]);

  const titleRef = useRef(null);

  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState("");
  const [selectedDifficultyRating, setSelectedDifficultyRating] =
    useState(undefined);

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
    await addDoc(recipesCollectionRef, {
      title: titleRef.current?.value,
      difficultyRating: selectedDifficultyRating,
    });
  };

  return (
    <div className="App">
      <Auth />

      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="title"
          id="title"
          ref={titleRef.current?.value}
        />

        <DifficultyRatingScore
          rating={selectedDifficultyRating}
          setRating={setSelectedDifficultyRating}
        />
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
