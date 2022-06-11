import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
};

const ContactForm = () => {
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
    console.log(values);
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

function App() {
  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm />
    </div>
  );
}

export default App;
