import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter = useSelector((state) => state.counter);

  return (
    <div>
      <h2>Counter Value: {counter}</h2>
    </div>
  );
};

export default CounterValue;
