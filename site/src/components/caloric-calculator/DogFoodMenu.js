import { useState } from "react";
import styles from "./DogFoodMenu.module.css";

const dogFood = [
  {
    id: 1,
    img: "https://zooviki.eu/wp-content/uploads/2020/06/csm_91183_0c4db2ab4a-min.jpg",
    description:
      "Rinti Max-i-mum – Самостоятелна храна с телешко шкембе за израснали кучета",
    kcal: 3.9,
  },
  {
    id: 2,
    img: "https://zooviki.eu/wp-content/uploads/2020/06/Acana_heritage_adult-dog-1800-585x500-min.jpg",
    description:
      "Acana Adult Dog – подходяща за кучета от 10 до 25 кг, и възраст над 12 месеца 11.4 кг.",
    kcal: 3.5,
  },
  {
    id: 3,
    img: "https://zooviki.eu/wp-content/uploads/2020/06/rc_ccn_digestivemini_9Amzi.jpg",
    description:
      "Royal canin Mini Digestive Care – За кучета от дребни породи (от 1 до 10 кг) в зряла възраст – Над 10 месеца – с чувствителна храносмилателна система.",
    kcal: 3.7,
  },
  {
    id: 4,
    img: "https://zooviki.eu/wp-content/uploads/2020/06/rc_ccn_digestivemini_9Amzi.jpg",
    description:
      "Royal canin Mini Digestive Care – За кучета от дребни породи (от 1 до 10 кг) в зряла възраст – Над 10 месеца – с чувствителна храносмилателна система.",
    kcal: 3.7,
  },
];

const DogFoodMenu = (props) => {
  const [grams, setGrams] = useState("");
  let targetedFood = [];
  const listOnClickHandler = (event) => {
    targetedFood = dogFood.filter((elem) => {
      return elem.id === Number(event.currentTarget.id);
    });
    let i = props.calories / targetedFood[0].kcal;
    props.gramsCountHandler(i);
  };

  return (
    <>
      <ul className={styles.list}>
        <h2>
          Вижте от колко грама има нужда вашият кюпек спрямо марката храна:
        </h2>
        {dogFood.map((elem) => {
          return (
            <li id={elem.id} onClick={listOnClickHandler} key={elem.id}>
              <div className={styles.mask}>
                <img className={styles.list_img} src={elem.img} alt="" />
              </div>
              <p>{elem.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DogFoodMenu;
