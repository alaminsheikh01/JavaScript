import { useEffect, useState } from "react";

const Work_api = () => {
  const [user, setUser] = useState([]);

  // fetch data way one; but here is a problem inside the network tab to load data infinite.
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));

  // fetch data way two.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>Users Details</h1>
      {user && (
        <div>
          name: {user.name}
          <br />
          email: {user.email}
          <br />
          phone: {user.phone}
        </div>
      )}
    </div>
  );
};

export default Work_api;
