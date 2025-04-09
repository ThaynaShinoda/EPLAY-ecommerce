import { Product } from '../Product';
import { Container, List, Title } from './styles';

type Props = {
  title: string;
  background: 'gray' | 'black';
};

export function ProductsList({ background, title }: Props) {
  return (
    <Container>
      <div className="wrapper">
        <Title>{title}</Title>
        <List>
          <Product />
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </Container>
  );
}
