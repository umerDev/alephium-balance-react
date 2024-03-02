import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

export const Counter = () => {
  const count = useContext(CounterContext);
  return <div>{count}</div>;
};
