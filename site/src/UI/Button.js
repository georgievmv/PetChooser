import "./Button.css";
const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`button-18 ${props.className}`}>
      {props.children}
    </button>
  );
};
export default Button;
