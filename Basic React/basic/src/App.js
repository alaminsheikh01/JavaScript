const ContactForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
      </div>
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
