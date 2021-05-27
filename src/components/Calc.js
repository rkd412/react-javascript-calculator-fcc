import "./Calc.css";
import { useState } from "react";

const Calc = () => {
  const [value, setValue] = useState("");

  const valueHandler = (e) => {
    setValue(value + e.currentTarget.getAttribute("value-str"));
    console.log(typeof value);
  };

  const valueClear = () => {
    setValue("");
    console.log(value);
  };

  const valueYield = () => {
    setValue(eval(value));
    console.log(value);
  };

  return (
    <div className={"container"} id={"calc"}>
      <div className={"display"} id={"display"}>
        {value}
      </div>

      <div
        className={"button"}
        id={"clear"}
        value-str={"AC"}
        onClick={valueClear}
      >
        AC
      </div>

      <div
        className={"button"}
        id={"divide"}
        value-str={"/"}
        onClick={valueHandler}
      >
        /
      </div>

      <div
        className={"button"}
        id={"multiply"}
        value-str={"*"}
        onClick={valueHandler}
      >
        x
      </div>

      <div
        className={"button"}
        id={"seven"}
        value-str={"7"}
        onClick={valueHandler}
      >
        7
      </div>

      <div
        className={"button"}
        id={"eight"}
        value-str={"8"}
        onClick={valueHandler}
      >
        8
      </div>

      <div
        className={"button"}
        id={"nine"}
        value-str={"9"}
        onClick={valueHandler}
      >
        9
      </div>

      <div
        className={"button"}
        id={"subtract"}
        value-str={"-"}
        onClick={valueHandler}
      >
        -
      </div>

      <div
        className={"button"}
        id={"four"}
        value-str={"4"}
        onClick={valueHandler}
      >
        4
      </div>

      <div
        className={"button"}
        id={"five"}
        value-str={"5"}
        onClick={valueHandler}
      >
        5
      </div>

      <div
        className={"button"}
        id={"six"}
        value-str={"6"}
        onClick={valueHandler}
      >
        6
      </div>

      <div
        className={"button"}
        id={"add"}
        value-str={"+"}
        onClick={valueHandler}
      >
        +
      </div>

      <div
        className={"button"}
        id={"one"}
        value-str={"1"}
        onClick={valueHandler}
      >
        1
      </div>

      <div
        className={"button"}
        id={"two"}
        value-str={"2"}
        onClick={valueHandler}
      >
        2
      </div>

      <div
        className={"button"}
        id={"three"}
        value-str={"3"}
        onClick={valueHandler}
      >
        3
      </div>

      <div
        className={"button"}
        id={"equals"}
        value-str={"="}
        onClick={valueYield}
      >
        =
      </div>

      <div
        className={"button"}
        id={"zero"}
        value-str={"0"}
        onClick={valueHandler}
      >
        0
      </div>

      <div
        className={"button"}
        id={"decimal"}
        value-str={"."}
        onClick={valueHandler}
      >
        .
      </div>
    </div>
  );
};

export default Calc;
