import styled from 'styled-components';
import { colors } from '../../styles/styles';
import { Props } from '.';

export const TagContainer = styled.div<Props>`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '1rem' : '0.625rem')};
  font-weight: bold;
  padding: ${(props) =>
    props.size === 'big' ? '0.5rem 1rem' : '0.25rem 0.375rem'};
  border-radius: 8px;

  display: inline-block;
`;
