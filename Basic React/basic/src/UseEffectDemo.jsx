import { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [timeCont, setTimeCount] = useState(5);

  useEffect(() => {
    if (count === 5) {
      setLock(true);
    }
  }, [count]);

  /**
   * 1. normal useEffect will do work on componentDidUpdate
   * 2. when we will give [] after the second parent barcket then will call componentDidMount
   * 3. if we will give any condition inside the useEffect then it will be shouldComponentUpdate
   * 4. if we will return something from the useEffect then it will be componentWillUnMount
   */
  let timeInterval = null;
  useEffect(() => {
    if (lock && timeInterval === null) {
      timeInterval = setInterval(() => {
        setTimeCount((prev) => prev - 1);
      }, 1000);
    }
  }, [lock]);

  useEffect(() => {
    if (timeCont === 0) {
      clearInterval(timeInterval);
      setCount(0);
      setLock(false);
      setTimeCount(5);
    }
  }, [timeCont]);

  return (
    <div>
      <h1 id="test">{count}</h1>
      <button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
        ADD {lock && `(locked - ${timeCont}s)`}
      </button>
      <div id="container"></div>
    </div>
  );
};

export default UseEffectDemo;
