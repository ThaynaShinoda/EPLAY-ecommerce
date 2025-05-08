import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/styles';

export const Links = styled.ul`
  display: flex;
  margin-left: 2.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`;

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 1.5rem;
  border-radius: 16px;
  margin-bottom: 5rem;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`;

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    &.is-open {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    &.is-open {
      display: block;
    }
  }
`;

export const LinkItem = styled.li`
  margin-right: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;
    a {
      display: block;
      padding: 1rem 0;
      text-align: center;
    }
  }
`;

export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 1rem;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`;

export const MenuMobile = styled.div`
  width: 2rem;
  cursor: pointer;
  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 0.25rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
