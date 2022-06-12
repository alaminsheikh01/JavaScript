import { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

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
  useEffect(() => {
    let time = null;
    if (lock) {
      time = setTimeout(() => {
        setCount(0);
        setLock(false);
        clearTimeout(time);
      }, 5000);
    }
  }, [lock]);

  console.log("count: ", count, "lock: ", lock);

  return (
    <div>
      <h1 id="test">{count}</h1>
      <button id="btn" disabled={lock} onClick={() => setCount(count + 1)}>
        ADD {lock && "(locked)"}
      </button>
      <div id="container"></div>
    </div>
  );
};

export default UseEffectDemo;
