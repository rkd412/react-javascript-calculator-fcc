import React, { useState, useEffect } from "react";
import styles from "./Calc.css";

const Calc = () => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
  const [decimal, setIsDecimal] = useState(false);

  const filteredVal = value.toString().replace(/^0{2}/, "");

  const operandHandler = (e) => {
    setActive(true);
    setValue(filteredVal + e.currentTarget.getAttribute("value-str"));
  };

  const operatorHandler = (e) => {
    setActive(true);
    setIsDecimal(false);
    setValue(filteredVal + e.currentTarget.getAttribute("value-str"));
  };

  const decimalHandler = (e) => {
    setActive(true);
    if (!decimal) {
      setValue(filteredVal + e.currentTarget.getAttribute("value-str"));
    }
    setIsDecimal(true);
  };

  const valueClear = () => {
    setActive(false);
    setValue("");
  };

  const valueYield = () => {
    setValue(eval(filteredVal));
  };

  return (
    <div className={"container"} id={"calc"}>
      <div className={"display"} id={"display"}>
        {active ? value : "0"}
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
        onClick={operatorHandler}
      >
        /
      </div>

      <div
        className={"button"}
        id={"multiply"}
        value-str={"*"}
        onClick={operatorHandler}
      >
        x
      </div>

      <div
        className={"button"}
        id={"seven"}
        value-str={"7"}
        onClick={operandHandler}
      >
        7
      </div>

      <div
        className={"button"}
        id={"eight"}
        value-str={"8"}
        onClick={operandHandler}
      >
        8
      </div>

      <div
        className={"button"}
        id={"nine"}
        value-str={"9"}
        onClick={operandHandler}
      >
        9
      </div>

      <div
        className={"button"}
        id={"subtract"}
        value-str={"-"}
        onClick={operatorHandler}
      >
        -
      </div>

      <div
        className={"button"}
        id={"four"}
        value-str={"4"}
        onClick={operandHandler}
      >
        4
      </div>

      <div
        className={"button"}
        id={"five"}
        value-str={"5"}
        onClick={operandHandler}
      >
        5
      </div>

      <div
        className={"button"}
        id={"six"}
        value-str={"6"}
        onClick={operandHandler}
      >
        6
      </div>

      <div
        className={"button"}
        id={"add"}
        value-str={"+"}
        onClick={operatorHandler}
      >
        +
      </div>

      <div
        className={"button"}
        id={"one"}
        value-str={"1"}
        onClick={operandHandler}
      >
        1
      </div>

      <div
        className={"button"}
        id={"two"}
        value-str={"2"}
        onClick={operandHandler}
      >
        2
      </div>

      <div
        className={"button"}
        id={"three"}
        value-str={"3"}
        onClick={operandHandler}
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
        onClick={operandHandler}
      >
        0
      </div>

      <div
        className={"button"}
        id={"decimal"}
        value-str={"."}
        onClick={decimalHandler}
      >
        .
      </div>
    </div>
  );
};

export default Calc;
