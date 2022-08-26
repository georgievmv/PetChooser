import { useEffect, useState } from "react";
import Button from "../UI/Button";
import styles from "./Home.module.css";

const Home = (props) => {
  const [animateDog, setAnimateDog] = useState(styles.dog_section);
  const [animate, setAnimate] = useState(styles.cat_section);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimate(styles.cat_section_show);
        }
      });
    });
    observer.observe(document.querySelector("#cat_section"));
  }, [animate]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateDog(styles.dog_section_show);
        }
      });
    });
    observer.observe(document.querySelector("#cat_section"));
  }, [animateDog]);

  const calorieCountHandler = () => {
    props.onSetCalorieCount(true);
  };
  const catSelectHandler = () => {
    props.onSetChoice("cat");
  };
  const dogSelectHandler = () => {
    props.onSetChoice("dog");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.home_container}>
      <div className={styles.headig_img_container}>
        <img className={styles.heading_img} src="690828.jpg" alt="" />
        <img className={styles.logo} src="cat.png" />
        <header className={styles.heading}>Pet Chooser</header>
      </div>

      <main>
        <article id="cat_section" className={animate}>
          <img className={styles.cat_info_img} src="cat-1-4K.jpg" alt="" />
          <p className={styles.home_description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit cum
            ratione tempore numquam? Libero quo, aliquam totam cumque, id vero
            dolores ratione, a itaque quas soluta! Tenetur amet quidem saepe
            corporis libero neque maiores consectetur animi, quos consequatur
            reprehenderit porro magnam distinctio voluptate ad dolorem, facilis
            error fuga omnis ab?
            <Button onClick={catSelectHandler} className={styles.cat_button}>
              Choose a cat!
            </Button>
          </p>
        </article>
        <article className={animateDog}>
          <p className={styles.home_description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit cum
            ratione tempore numquam? Libero quo, aliquam totam cumque, id vero
            dolores ratione, a itaque quas soluta! Tenetur amet quidem saepe
            corporis libero neque maiores consectetur animi, quos consequatur
            reprehenderit porro magnam distinctio voluptate ad dolorem, facilis
            error fuga omnis ab?
            <Button onClick={dogSelectHandler} className={styles.dog_button}>
              Choose a dog!
            </Button>
          </p>
          <img className={styles.cat_info_img} src="368333.jpg" alt="" />
        </article>
      </main>
      <p className={styles.caloric_calculator}>
        Are you interested in the amount of food your dog should eat? Well you
        can find out now in our new{" "}
        <a onClick={calorieCountHandler}>Caloric calculator</a>
      </p>
    </div>
  );
};

export default Home;
