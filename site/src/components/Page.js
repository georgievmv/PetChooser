import { useEffect } from "react";
import styles from "./Page.module.css";
import Button from "../UI/Button";
import Nav from "./Nav";
const Page = (props) => {
  const imgClickHandler = () => {
    props.onSetChoice("");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={props.className}>
      <Nav imgClickHandler={imgClickHandler} elem={props.dogs} />
      {props.dogs.map((dog) => {
        return (
          <div key={dog.id} id={dog.id} className={styles.element}>
            <h1
              className={
                dog.color === "dark"
                  ? styles.heading_dogs_dark
                  : styles.heading_dogs_light
              }
            >
              {dog.name}
            </h1>

            <Button className={styles.learnbtn}>Learn More</Button>
            <img className={styles.page_img} src={dog.img} />
          </div>
        );
      })}
    </div>
  );
};
export default Page;
