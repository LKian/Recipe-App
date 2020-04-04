import React from "react";
import style from "./recipe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faUserFriends, faFireAlt } from "@fortawesome/free-solid-svg-icons";

const Recipe = ({
  title,
  calories,
  image,
  serving,
  totalTime,
  label,
  ingredientLines
}) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <img src={image} alt={label} />
      <ul>
        {ingredientLines.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>

      <div className={style.recipeDetailsContainer}>
        <div className={style.recipeDetails}>
          <FontAwesomeIcon
            className={style.subsectionIcon}
            icon={faFireAlt}
            size="2x"
          />
          <p>{Math.round(calories)}</p>
          <p>Calories</p>
        </div>
        <div className={style.recipeDetails}>
          <FontAwesomeIcon
            className={style.subsectionIcon}
            icon={faUserFriends}
            size="2x"
          />
          <p>{serving}</p>
          <p>Servings</p>
        </div>
        <div className={style.recipeDetails}>
          <FontAwesomeIcon
            className={style.subsectionIcon}
            icon={faClock}
            size="2x"
          />
          <p>{totalTime}</p>
          <p>Minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
