import styled from "styled-components";

const fontSize = {
  sm: "0.8rem",
  md: "1rem",
  lg: "1.2rem",
};

const BaseButton = styled.button`
  border: none;
  outline: none;
  background: ${(props) => (props.dark ? "#dddd" : "black")};
  color: ${(props) => (props.dark ? "black" : "white")};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.15rem;
  font-size: ${(props) => fontSize[props.size] ?? "1rem"};
`;

const PrimaryButton = styled(BaseButton)`
  background: red;
  color: white;
`;

function StyleComponent() {
  return (
    <div>
      <h1>Styled Component </h1>
      <BaseButton dark size="sm">
        I am a button
      </BaseButton>
      <PrimaryButton size="sm">Primary Button</PrimaryButton>
    </div>
  );
}

export default StyleComponent;
