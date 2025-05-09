import styled from 'styled-components';
import { colors } from '../../styles/styles';

type InputGroupProps = {
  maxWidth?: string;
};

type RowProps = {
  marginTop?: string;
};

type TabButtonProps = {
  isActive: boolean;
};

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 1.5rem;
  margin-top: ${(props) => props.marginTop || '0'};
`;

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};
  label {
    display: block;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 2rem;
    width: 100%;
    padding: 0 0.5rem;

    &.error {
      border: 1px solid red;
    }
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 2rem;
  border: none;
  margin-right: 1rem;
  padding: 0 0.5rem;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;
