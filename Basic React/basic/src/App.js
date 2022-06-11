import { useState } from "react";
import ContactForm from "./contact/ContactForm";
import Table from "./contact/Table";

function App() {
  const [contacts, setContact] = useState([]);
  const getdata = (values) => {
    // console.log(values.name);
    // console.log(values.email);
    setContact([].concat(contacts, values));
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
