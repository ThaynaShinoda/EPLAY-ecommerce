import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { TagContainer } from '../Tag/styles';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  background-color: ${colors.gray};
  padding: 0.5rem;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${colors.white};
  display: block;
  height: 100%;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  ${TagContainer} {
    margin-right: 0.5rem;
  }
`;
export const Title = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.375rem;
  display: block;
  margin-top: 1rem;
`;

export const Infos = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
