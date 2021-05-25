import styles from "./Buttons.module.css";

const Buttons = (props) => {
  return (
    <div id={props.button}>
      {props.button}
    </div>
  );
};

export default Buttons;