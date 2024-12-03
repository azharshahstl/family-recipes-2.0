import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [recipes, setRecipes] = useState([]);

  const recipesCollectionRef = useMemo(() => {
    collection(db, "recipes");
  }, []);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const recipeData = await getDocs(recipesCollectionRef);
        console.log(recipeData);
      } catch (err) {
        // console.log(err);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
