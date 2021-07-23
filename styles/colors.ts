import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, CardImg } from 'reactstrap'

interface BoxProps {
	color: string;
  }

  export const StyledCardImg = styled(CardImg)<BoxProps>`
  background: linear-gradient(#F0FFF0, ${props => props.color});

`
export const StyledCard = styled(Card)`
  background: ${props => props.theme.colors.primary};
`;

export const StyledLink = styled(Link)`
background-color: #D93E30;
	-moz-user-select: none;
	text-transform: capitalize;
	color: #fff;
	cursor: pointer;
	display: inline-block;
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 1px;
	line-height: 0;
	margin-bottom: 0;
	padding: 30px 44px;
	border-radius: 5px;
	cursor: pointer;
	transition: color 0.4s linear;
	position: relative;
	z-index: 1;
	border: 0;
	overflow: hidden;
	margin: 0;
	text-decoration: none;

  &:before {
    color: #fff;
    content: "";
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #d62514;
	z-index: 1;
	border-radius: 5px;
	transition: transform 0.5s;
	transition-timing-function: ease;
	transform-origin: 0 0;
	transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
	transform: scaleX(0)
  }
&:hover:before {
  transform: scaleX(1);
	color: #fff !important;
	z-index: -1
}
&:hover{
	color: #fff !important;

}
&:focus {
  outline: 0;
	box-shadow: none
}
`;


