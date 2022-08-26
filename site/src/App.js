import { Fragment, useState, useEffect, useRef } from "react";
import Page from "./components/Page";

import "./App.css";
import Home from "./components/Home";
import Calories from "./components/caloric-calculator/Calories";
const dogArr = [
  {
    id: "1",
    name: "Cocker Spaniel",
    img: "778348.jpg",
    color: "light",
    info: "",
  },
  {
    id: "2",
    name: "Border Collie",
    img: "838158.jpg",
    color: "dark",
    info: "",
  },
  {
    id: "3",
    name: "German Shepard",
    img: "333083.jpg",
    color: "dark",
    info: "",
  },
  {
    id: "4",
    name: "Labrador",
    img: "labrador.jpg",
    color: "dark",
    info: "",
  },
];
/* const catArr = [
  {
    id: "1",
    name: "Persian",
    img: "petra-bouchalova-3iL2rXnLjWU-unsplash.jpg",
    color: "dark",
    info: "",
  },
  {
    id: "2",
    name: "Abyssinian",
    img: "abyssinian-cat-4k-cute-animals-cats-abyssinian.jpg",
    color: "light",
    info: "",
  },
  {
    id: "3",
    name: "Abyssinian",
    img: "abyssinian-cat-4k-cute-animals-cats-abyssinian.jpg",
    color: "light",
    info: "",
  },
]; */

const App = () => {
  const [choise, setChoice] = useState("");
  const [calorieCount, setCalorieCount] = useState(false);
  const [catArr, setCatArr] = useState({
    id: "",
    name: "",
    img: {},
    color: "",
    info: "",
  });
  ///
  const dogInfoFetchHandler = async () => {
    const response = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
    );
    const data = await response.json();
    console.log(data);
  };
  const catInfoFetchHandler = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await response.json();
    setCatArr(
      data.map((cat) => {
        return {
          id: cat.id,
          name: cat.name,
          img: cat.image ? cat.image.url : "",
          color: "dark",
          info: "",
        };
      })
    );
  };
  useEffect(() => {
    dogInfoFetchHandler();
    catInfoFetchHandler();
  }, []);
  /////////////
  return (
    <Fragment>
      {calorieCount && <Calories onSetCalorieCount={setCalorieCount} />}
      {choise === "" && !calorieCount && (
        <Home onSetCalorieCount={setCalorieCount} onSetChoice={setChoice} />
      )}
      {choise === "cat" && <Page onSetChoice={setChoice} dogs={catArr} />}
      {choise === "dog" && <Page onSetChoice={setChoice} dogs={dogArr} />}
    </Fragment>
  );
};
export default App;
