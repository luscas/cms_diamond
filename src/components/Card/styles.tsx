import styled from "styled-components";

export const CardTitle = styled.div`
  font-family: "Ubuntu Condensed", sans-sarif;
  font-size: 18px;
  color: #ffffff;
`;

export interface CardProp {
  disablePadding?: boolean;
}

export const Card = styled.div.attrs((props: CardProp) => ({
  disablePadding: props?.disablePadding ?? false,
}))`
  background-color: #0e1020;
  max-width: 100%;
  border: 1px solid #2e313e80;
  border-radius: 8px;
  padding: ${(props) => (props?.disablePadding ? "0px" : "24px")};
  & ${CardTitle} {
    padding: ${(props) => (!props?.disablePadding ? "0px" : "24px")};
    padding-right: 0px;
    padding-bottom: 0px;
  }
`;
