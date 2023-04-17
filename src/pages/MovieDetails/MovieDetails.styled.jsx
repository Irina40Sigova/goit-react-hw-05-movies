import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
`;

export const Back = styled(Link)`
  display: inline-block;
  width: 150px;
  height: 22px;
  padding: 8px;
  margin-right: 8px;
  font-size: 20px;
  border-radius: 4px;
  background-color: lightgray;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
`;
export const Box = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: solid 1px grey;
`;
export const Info = styled.div`
  padding: 20px 40px;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;
export const Text = styled.p`
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 24px;
`;
export const Score = styled.h3`
  font-size: 30px;
  color: red;
`;
export const InfoList = styled(NavLink)`
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: black;
  background-color: #febe10;
  padding: 16px 40px;
  font-size: 24px;
  border-radius: 4px;
  &.active {
    color: white;
    background-color: #ff894c;
  }
`;
