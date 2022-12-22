import styled from "styled-components";

// Google Fonts
import { Ubuntu } from "@next/font/google";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const Option = styled.div`
  background-color: #1c1f2e;
  border-radius: 8px;
  position: absolute;
  margin-bottom: 8px;
  bottom: 100%;
  left: 0;
  font-family: Ubuntu, sans-serif;
  font-size: 14px;
  font-weight: bold;
  padding: 12px 16px;
  transition: all 0.2s linear;
  visibility: hidden;
  opacity: 0;
  transform: scale(0.95) perspective(100px) translate3d(0, -10px, 0);
`;

export const ArrowContainer = styled.div`
  background-color: #1c1f2e;
  width: 16px;
  height: 16px;
  color: #5c667a;
  place-items: center;
  display: grid;
  transition: all 100ms ease-in;
`;

export const Container = styled.div`
  flex: 1;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: 48px;
  margin-bottom: 136px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  display: flex;
  cursor: pointer;
  position: relative;
  &:hover ${Option} {
    opacity: 1;
    visibility: visible;
    transform: scale(1) perspective(0px) translate3d(0, 0, 0);
  }
  &:hover ${ArrowContainer} {
    transform: rotate(180deg);
  }
`;

export const Avatar = styled.div`
  background-image: url(https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user=4queijos&direction=2&head_direction=3&size=m&headonly=1);
  background-position: center;
  background-color: #6d95f7;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  flex-shrink: 1;
`;
