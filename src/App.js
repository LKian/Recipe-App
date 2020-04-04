import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

require("dotenv").config({ path: "./config.env" });

const App = () => {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);
  // const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // useEffect(() => {
  //   console.log(`Effect has been run ${count} times.`);
  // }, [count]); // this runs each time count changes bc there is a count in the bracket.  if [] is empty, it only runs 1x

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log("response ", response);

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            serving={recipe.recipe.yield}
            totalTime={recipe.recipe.totalTime}
            image={recipe.recipe.image}
            label={recipe.recipe.label}
            ingredientLines={recipe.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

// REACT_APP_API_ID="cadb6b6a"
// REACT_APP_API_KEY="960460011076a1d3037f72a2e264ffe8";
