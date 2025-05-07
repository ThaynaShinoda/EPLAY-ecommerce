import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const Row = styled.div`
  display: flex;
  column-gap: 1.5rem;
`;

export const InputGroup = styled.div`
  flex: auto;
  label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  input {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 2rem;
    width: 100%;
    padding: 0 0.5rem;
  }
`;
