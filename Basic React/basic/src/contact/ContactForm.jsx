import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
  group: "",
};

const ContactForm = ({ getdata1 }) => {
  const [values, setValue] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email, group } = values;

  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getdata1(values);
    setValue({ ...CONTACT_FORM_INIT_STATE });
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
      <br />
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
      <div>
        <label htmlFor="group">Group</label>
        <select name="group" id="group" value={group} onChange={handleChange}>
          <option value="">Selecte Group</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
      </div>
      <br />
      <input type="submit" value="Create New Contact" />
    </form>
  );
};

export default ContactForm;
