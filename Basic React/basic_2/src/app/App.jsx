import useForm from "../hooks/useForm";

const App = () => {
  const { formState } = useForm({
    init: {
      name: "Alamin Sheikh",
      email: "",
      password: "",
    },
  });

  console.log(formState);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
