import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/styles';
import { TagContainer } from '../Tag/styles';

export const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 480px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  padding-top: 1rem;

  @media(max-width: ${breakpoints.tablet}) {
      background-size: cover;
    }

  &:after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  .wrapper {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  ${TagContainer} {
    margin-right: 0.5rem;
  }
`;

export const Infos = styled.div`
  padding: 1rem;
  background-color: ${colors.black};
  max-width: 290px;

  font-weight: bold;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.125rem;
    margin: 1rem 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`;
