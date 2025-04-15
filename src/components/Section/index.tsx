import { JSX } from 'react';
import { Container, Title } from './styles';

export type Props = {
  title: string;
  background: 'black' | 'gray';
  children: JSX.Element;
};

export function Section({ title, background, children }: Props) {
  return (
    <Container background={background}>
      <div className="wrapper">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  );
}
