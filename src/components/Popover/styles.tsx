import styled from "styled-components";

export const PopoverContent = styled.div`
    border-radius: 4px;
    padding: 20px;
    width: 260px;
    background-color: #0e1020;
    border: 1px solid #2e313e80;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
  &[data-state='open'][data-side='top'] {
    animation-name: slideDownAndFade;
  }
  &[data-state='open'][data-side='right'] {
    animation-name: slideLeftAndFade;
  }
  &[data-state='open'][data-side='bottom'] {
    animation-name: slideUpAndFade;
  }
  &[data-state='open'][data-side='left'] {
    animation-name: slideRightAndFade;
  }
  & .PopoverArrow {
    fill: #0e1020;
    filter: drop-shadow(0 1px 0 #2e313e80);
  }
  & ul,
  & li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  & .options {
    gap: 12px;
    flex-direction: column;
    display: flex;
    font-size: 14px;
  }
`;