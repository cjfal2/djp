import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const randomNumber: number = Math.floor(Math.random() * 3) + 1;
  const plusNumber = () => {
    setCount(count + 1);
  };
  const minusNumber = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>{count}</div>
      <div>{randomNumber}</div>
      <button onClick={plusNumber}>+</button>
      <button onClick={minusNumber}>-</button>
    </>
  );
}
