import styled from "styled-components";

export const Columns = styled.div.attrs((props: any) => ({
  size: props.size ?? 1,
  spacing: props.spacing ?? 24,
  mt: props.mt,
  mb: props.mb,
  justifyContent: props.justifyContent ?? "align-start",
}))`
  grid-template-columns: repeat(${(props) => props.size}, auto);
  gap: ${(props) => props.spacing}px;
  margin-top: ${(props) => props.mt}px;
  margin-bottom: ${(props) => props.mb}px;
  justify-content: ${(props) => props.justifyContent};
  display: grid;
`;
