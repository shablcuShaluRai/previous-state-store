import { useState, useEffect, useRef } from "react";

const usePrevious = (count) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = count;
  }, [count]);

  return ref.current;
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const previousCount = usePrevious(counter);
  return (
    <div className="App">
      <div>count: {counter}</div>
      <div>previous count: {previousCount}</div>
      <button onClick={() => setCounter(counter + 1)}>update count</button>
    </div>
  );
}
