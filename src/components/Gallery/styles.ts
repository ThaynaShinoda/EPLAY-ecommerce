import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Items = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 1rem;
  img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;
