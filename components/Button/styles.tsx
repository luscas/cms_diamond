import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-image: linear-gradient(to bottom, #5886f6, #225cf2);
  padding: 18px 24px;
  font-family: "Ubuntu Condensed";
  font-size: 16px;
  margin: 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  transition: all 200ms ease-in-out;

  & svg {
    margin-right: 8px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
