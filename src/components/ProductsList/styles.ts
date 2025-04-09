import styled from 'styled-components';
import { Props } from '.';
import { colors } from '../../styles/styles';
import { Card } from '../Product/styles';

export const Container = styled.section<Omit<Props, 'title'>>`
  padding: 2rem 0;
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1.5rem;
  margin-top: 2.5rem;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: bold;
`;
