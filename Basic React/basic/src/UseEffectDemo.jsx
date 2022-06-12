import { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("btn");
    console.log(btn.offsetHeight, btn.offsetWidth);
  });
  return (
    <div>
      <h1 id="test">Hello world</h1>
      <button id="btn">click me</button>
      <div id="container"></div>
    </div>
  );
};

export default UseEffectDemo;
