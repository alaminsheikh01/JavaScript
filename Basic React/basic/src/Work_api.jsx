import { useEffect, useState } from "react";

const Work_api = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);
  const max = 10;

  const cashData = [];

  // fetch data way one; but here is a problem inside the network tab to load data infinite.
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));

  // fetch data way two.
  useEffect(() => {
    if (cashData[`user-${id}`]) {
      setUser(cashData[`user-${id}`]);
      return;
    }

    setLoading(true);
    fetchUsers(id)
      .then((data) => {
        setUser(data);
      })
      .finally(() => setLoading(false));
    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUser(data);
    //     cashData[`user-${id}`] = data;
    //   })
    //   .finally(setLoading(false));
  }, [id]);

  const fetchUsers = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        cashData[`user-${id}`] = data;
        return data;
      });
  };

  const nextHandler = () => {
    if (id < max) {
      setId(id + 1);
    }
  };
  const previousHandler = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  return (
    <div>
      <h1>Users Details {id}</h1>
      {loading && <p>Loading...</p>}
      {!loading && user && (
        <div>
          name: {user.name}
          <br />
          email: {user.email}
          <br />
          phone: {user.phone}
        </div>
      )}
      <br />
      <div>
        <button disabled={id === 1} onClick={previousHandler}>
          previous
        </button>{" "}
        <button disabled={id === 10} onClick={nextHandler}>
          next
        </button>
      </div>
    </div>
  );
};

export default Work_api;
