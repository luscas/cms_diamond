import styled from "styled-components";

export const Container = styled.div`
  margin-top: -4px;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
`;

export const PointsContainer = styled.div`
  width: max-content;
  padding: 0 24px 24px 24px;
  & .PopoverTrigger {
    background: none;
    font-size: 14px;
    padding: 7px 8px;
    border-radius: 8px;
    color: #5c667a;
    border: none;
    &:hover {
      background-color: #2e313e;
      color: #fff;
    }
  }
`;
export const PointsTotal = styled.div`
  font-size: 56px;
  font-weight: bold;
  color: #ffffff;
`;
export const PointsTime = styled.div`
  width: max-content;
  font-size: 14px;
  padding: 7px 8px;
  border-radius: 8px;
  color: #5c667a;
  display: block;
  &:hover {
    background-color: #2e313e;
    color: #fff;
  }
`;

export const Role = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  position: absolute;
  right: 24px;
  bottom: 24px;
  padding: 8px 16px;
  font-size: 14px;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.97) translateY(-5px);
  transition: all 150ms ease-out;
  &:before {
    content: "";
    /* background-color: #202129; */
    background-color: greenyellow;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 8px;
    display: inline-block;
  }
`;

export const Info = styled.div`
  position: relative;

  &:hover ${Role} {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translateY(0px);
  }
`;
export const Avatar = styled.div`
  background-image: url(/images/base_avatar.png);
  background-repeat: no-repeat;
  background-position: 68px 113px;
  width: 100%;
  height: 100%;
  position: relative;
  &:after {
    content: "";
    background-image: url(https://habbo.com.br/habbo-imaging/avatarimage?img_format=png&user=4queijos&direction=4&head_direction=3&size=l&action=std);
    width: 128px;
    height: 220px;
    position: absolute;
    top: -60px;
    right: 62px;
  }
`;
