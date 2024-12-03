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
        const filteredData = recipeData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        console.log("recipe data", filteredData);
      } catch (err) {
        console.log(err);
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
