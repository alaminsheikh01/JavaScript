import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
};

const ContactForm = ({ getdata1 }) => {
  const [values, setValue] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email } = values;

  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getdata1(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <br />
      <input type="submit" value="Create New Contact" />
    </form>
  );
};

const Table = ({ values }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {values.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function App() {
  const [contacts, setContact] = useState([]);
  const getdata = (values) => {
    // console.log(values.name);
    // console.log(values.email);
    setContact([].concat(contacts, values));
    console.log(contacts);
  };
  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getdata1={getdata} />
      <Table values={contacts} />
    </div>
  );
}

export default App;
