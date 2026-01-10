import { memo } from "react";
import useCounter from "../hooks/customHook";
function  Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default memo(Counter);
