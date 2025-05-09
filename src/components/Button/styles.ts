import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { Link } from 'react-router-dom';
import { Props } from '.';

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
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
