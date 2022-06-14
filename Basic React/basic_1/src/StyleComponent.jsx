import styled from "styled-components";

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
`;

function StyleComponent() {
  return (
    <div>
      <h1>Styled Component </h1>
      <BaseButton dark>I am a button</BaseButton>
    </div>
  );
}

export default StyleComponent;