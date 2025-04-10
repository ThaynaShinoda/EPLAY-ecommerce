import { Game } from '../../models/Game';
import { Product } from '../Product';
import { Container, List, Title } from './styles';

export type Props = {
  title: string;
  background: 'gray' | 'black';
  games: Game[];
};

export function ProductsList({ background, title, games }: Props) {
  return (
    <Container background={background}>
      <div className="wrapper">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              infos={game.infos}
              system={game.system}
              title={game.title}
            />
          ))}
        </List>
      </div>
    </Container>
  );
}
