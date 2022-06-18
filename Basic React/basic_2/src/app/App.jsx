import useForm from "../hooks/useForm";

const App = () => {
  useForm({
    init: {
      name: "Alamin Sheikh",
      email: "",
      password: "",
    },
  });

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
