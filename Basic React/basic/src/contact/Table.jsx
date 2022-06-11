import { useState } from "react";

const Table = ({ values }) => {
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  let filteredContacts = [];
  if (filter === "all") {
    filteredContacts = values;
  } else {
    filteredContacts = values.filter((value) => value.group === filter);
  }

  return (
    <>
      <br />
      <div>
        Filters:
        <select value={filter} onChange={handleChange}>
          <option value="all">All</option>
          <option value="">None</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
        <input type="search" placeholder="search" />
      </div>
      <br />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <td>Group</td>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
