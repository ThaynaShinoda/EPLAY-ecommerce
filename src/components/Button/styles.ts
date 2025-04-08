import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { Link } from 'react-router-dom';

export const ButtonContainer = styled.button`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
`;

export const ButtonLink = styled(Link)`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 8px;
`;
