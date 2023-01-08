import styled from "styled-components";

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
  color: #ffffff;
`;

export const ArrowContainer = styled.div`
  background-color: #1c1f2e;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  color: #5c667a;
  place-items: center;
  display: grid;
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
    background-color: #5c667a;
    transform: rotate(180deg);
  }
  &:hover ${ArrowContainer} svg {
    color: #fff;
  }
  &:after {
    content: "";
    background-color: #5c667a;
    width: 1px;
    height: 64px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    position: absolute;
    top: -8px;
    right: -12px;
    transition: all 150ms ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
  &:hover:after {
    width: 4px;
    opacity: 1;
    visibility: visible;
  }
`;

export const Avatar = styled.div`
  background-image: url(https://sandbox.habbo.com/habbo-imaging/avatarimage?img_format=png&user=;-Isabel-;&direction=2&head_direction=3&size=m&headonly=1);
  background-position: center;
  background-color: #6d95f7;
  width: 48px;
  height: 48px;
  border-radius: 48px;
  flex-shrink: 1;
`;
