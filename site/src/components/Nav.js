import styles from "./Nav.module.css";
const Nav = (props) => {
  return (
    <nav className={styles.nav_bar}>
      <img
        onClick={props.imgClickHandler}
        className={styles.icon}
        src="cat.png"
      />

      <ul className={styles.list}>
        {props.elem.map((name) => {
          return (
            <li key={name.id} className={styles.list_item}>
              <a className={styles.nav_elem} href={`#${name.id}`}>
                {name.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
