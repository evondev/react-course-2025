import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="p-5">
      <div className="font-bold text-xl mb-5">{counter}</div>
      <button
        className="p-3 rounded-md bg-blue-400 text-white flex items-center justify-center"
        onClick={() => {
          setIsActive((prevActive) => !prevActive);
          // setCounter((prev) => prev + 1);
          // setCounter((prev) => prev + 1);
          // setCounter((prev) => prev + 1);
          // setCounter((0) => 0 + 1);
          // setCounter((1) => 1 + 1);
          // setCounter((2) => 2 + 1); -> 3
          // setCounter(counter + 5);
          // setTimeout(() => {
          //   alert(counter);
          // }, 3000);
          // setCounter(5 + 5);
          // setTimeout(() => {
          //   alert(5);
          // }, 3000);
          // setCounter(0 + 5);
          // alert(0);
          // setCounter(5 + 5);
          // alert(5);
          // setCounter(10 + 5);
          // alert(10);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default App;
