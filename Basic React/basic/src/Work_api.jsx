import React from "react";

const Work_api = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
  return (
    <div>
      <h1>API</h1>
    </div>
  );
};

export default Work_api;
