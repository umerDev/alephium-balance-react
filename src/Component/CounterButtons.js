import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export const CounterButtons = () => {
  let [_, setCount] = useContext(CounterContext);

  const incHandler = () => {
    setCount((count) => count + 1);
  };

  const decHandler = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <button name="increment" onClick={incHandler}>
        Increment
      </button>
      <button name="decrement" onClick={decHandler}>
        Decrement
      </button>
    </div>
  );
};
