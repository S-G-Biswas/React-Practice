import React from "react";
import CounterButtons from "./CounterButton";
import CounterValue from "./CounterValue";

const ReduxCounter = () => {
  return (
    <div>
      <CounterValue />
      <CounterButtons />
    </div>
  );
};

export default ReduxCounter;
