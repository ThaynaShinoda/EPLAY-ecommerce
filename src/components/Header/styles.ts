import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/styles';

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 1.5rem;
  border-radius: 16px;
  margin-bottom: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media(max-width: ${breakpoints.tablet}) {
      display: none;
    }
`;
export const Links = styled.ul`
  display: flex;
  margin-left: 2.5rem;
`;

export const LinkItem = styled.li`
  margin-right: 1rem;
`;

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 1rem;
    cursor: pointer;
  }
`;
