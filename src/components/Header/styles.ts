import styled from 'styled-components';
import { colors } from '../../styles/styles';

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
`;
export const Links = styled.ul`
  display: flex;
  margin-left: 2.5rem;
`;

export const LinkItem = styled.li`
  margin-right: 1rem;
`;

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 1rem;
  }
`;
