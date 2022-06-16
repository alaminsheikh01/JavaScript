import Button from "../components/UI/button/Button";
import TextInput from "../components/UI/inputs/TextInput";
import Text from "../components/UI/texts/Text";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <TextInput />
      <Button>Test Me</Button>
      <Text size="md" line="lg">
        Hello Styled component
      </Text>
    </div>
  );
}

export default App;
