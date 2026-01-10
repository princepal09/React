import React, { useState } from "react";

const Challenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
  };
  const handleDecrement = () => {
    // if(count <= 1) return;
    setCount(count - step);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>State Challenge</h1>

      <p>
        Count: <span>{count}</span>
      </p>

      <div>
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <button disabled={count >= 100} onClick={handleIncrement}>
          Increment
        </button>
        <button disabled={count <= 0} onClick={handleDecrement}>
          Decrement
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Challenge;
