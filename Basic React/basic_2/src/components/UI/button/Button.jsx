import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  background: #e1e1e1;
  border-radius: 0.15rem;
  padding: 0.25rem 1rem;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
  font-weight: 500;
  letter-spacing: 0.1rem;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: #bebdbd;
  }
`;

export default Button;
