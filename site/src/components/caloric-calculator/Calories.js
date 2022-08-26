import { useState, useEffect } from "react";
import styles from "./Calories.module.css";
import DogForm from "./DogForm";
import DogFoodMenu from "./DogFoodMenu";

function Calories(props) {
  const [human, setHuman] = useState(true);
  const [calories, setCalories] = useState(0);
  const [grams, setGrams] = useState("");
  const [foodMenu, setFoodMenu] = useState(false);
  const rezultat = (result) => {
    setCalories(result);
  };
  let dogArr = [];
  if (human) {
    dogArr = [
      "Бау бау бау",
      "Бау баy",
      "Бау Бау Бау бау",
      "Бау бау бау бау бау бау бау",
      "Бау?",
      "Бау",
      "Бау",
      "Бау",
      "Бау",
    ];
  } else {
    dogArr = [
      "Активност на кученце",
      "Тегло на кученце",
      "Aко си човек натисни",
      "",
      "",
      "Много активно",
      "Активно",
      "Слабо активно",
      "Пресметни",
    ];
  }
  const againClickHandler = () => {
    setCalories(0);
    setGrams("");
    setFoodMenu(false);
  };
  const gramsCountHandler = (count) => {
    setGrams(count);
    setFoodMenu(true);
  };
  const nazadClickHandler = () => {
    setFoodMenu(false);
  };
  const humanClickHandler = () => {
    setHuman((prevState) => {
      return !prevState;
    });
  };
  const homeClickHandler = () => {
    props.onSetCalorieCount(false);
  };
  return (
    <>
      <div className={styles.logo_div}>
        <h2>Home</h2>
        <img onClick={homeClickHandler} className={styles.logo} src="cat.png" />
      </div>
      {calories === 0 ? (
        <div>
          <p className={styles.human_menu}>
            {human ? "Ако си човек натисни " : "Бау бау "}
            <button className="glow-on-hover" onClick={humanClickHandler}>
              {human ? "Тук" : "Бау"}
            </button>
          </p>
        </div>
      ) : (
        ""
      )}
      <div key={calories} className={styles.dog_form_result}>
        {calories === 0 ? <DogForm human={dogArr} rezultat={rezultat} /> : ""}
        {calories > 0 ? (
          <p className={styles.rezultat}>
            Вашето кученце трябва да хапва {calories.toFixed()} калории на ден.
          </p>
        ) : (
          ""
        )}
        {calories > 0 ? <button onClick={againClickHandler}>Бау?</button> : ""}
      </div>
      <div className={styles.dog_food_menu}>
        {calories > 0 && !foodMenu ? (
          <DogFoodMenu
            gramsCountHandler={gramsCountHandler}
            calories={calories}
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.dog_food_menu}>
        {grams !== "" && foodMenu ? (
          <p className={styles.grams}>
            Кученцето има нужда от {grams.toFixed()} грама от тази храна!!
          </p>
        ) : (
          ""
        )}
        {grams !== "" && foodMenu ? (
          <button onClick={nazadClickHandler}>Бау?</button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Calories;
