import styled from "styled-components";

export interface ItemProps {
  isActive?: boolean;
}

export const Title = styled.div`
  font-family: "Ubuntu Condensed", sans-serif;
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 8px;
  color: #5c667a;
`;

export const Container = styled.div.attrs((props: ItemProps) => ({
  isActive: props.isActive || false,
}))`
  width: 96px;
  height: 64px;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;
  &::before {
    content: "";
    width: ${(props) => props.isActive && "4px"};
    height: 64px;
    background-color: #225cf2;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.5s linear;
  }
  & svg {
    color: ${(props) => (props.isActive ? "#ffffff" : "#5c667a")};
  }
  & ${Title} {
    background-color: ${(props) => props.isActive && "#2E313E"};
    color: ${(props) => props.isActive && "#fff"};
  }
`;
