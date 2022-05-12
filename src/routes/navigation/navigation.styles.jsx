import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  padding: 2%;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
	background: linear-gradient(
	to left,
	rgba(7, 27, 82, 0.90) 0%,
	rgba(0, 128, 128, 0.90) 100%
  );
`;

export const LogoContainer = styled(Link)`
	display: flex;
	flex-grow: 2;
  height: 100%;
  width: 70px;
  font-size: 24px;
  margin-bottom: 2%;
  font-weight: bold;
  color: wheat;

  & img {
	width: 42px;
	height: 42px;
	margin-right: 10%;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
  color: white !important;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: xx-large;
  font-weight: light;
`;
