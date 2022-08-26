import { useState } from "react";
import styles from "./DogForm.module.css";
const DogForm = (props) => {
  const [teglo, setTeglo] = useState("");
  const [aktivnost, setAktivnost] = useState("Слабо активно");
  const tegloChangeHandler = (event) => {
    setTeglo(event.target.value);
  };
  const tegloIsInvalid = teglo === null || teglo < 1;

  const aktivnostChangeHandler = (event) => {
    setAktivnost(event.target.value);
  };
  let r = "";
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const a = Math.pow(teglo, 0.67);
    if (aktivnost === "Слабо активно") {
      r = a * 99;
    } else if (aktivnost === "Активно") {
      r = a * 132;
    } else if (aktivnost === "Много активно") {
      r = a * 160;
    }
    props.rezultat(r);
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.input_elem_one}>
          <label>{props.human[1]}</label>
          <input
            onChange={tegloChangeHandler}
            value={teglo}
            type="number"
            min="0"
            step="0.1"
          ></input>
          <p>кг.</p>
        </div>
        <div className={styles.input_elem_two}>
          <label>{props.human[0]} </label>
          <select
            value={aktivnost}
            onChange={aktivnostChangeHandler}
            name="ativity"
            id="activity"
          >
            <option value="Много активно">{props.human[5]}</option>
            <option value="Активно">{props.human[6]}</option>
            <option value="Слабо активно">{props.human[7]}</option>
          </select>
        </div>
        <div className={styles.button_div}>
          <button disabled={tegloIsInvalid} type="submit">
            {props.human[8]}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DogForm;
