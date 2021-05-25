import styles from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div id={props.button}>
      {props.text}
    </div>
  );
};

export default Buttons;