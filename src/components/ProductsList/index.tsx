import { Product } from '../Product';
import { formatPrice } from '../../utils/index';
import { Container, List, Title } from './styles';
import { Loader } from '../Loader';

export type Props = {
  title: string;
  background: 'gray' | 'black';
  games?: Game[];
  id?: string;
  isLoading: boolean;
};

export function ProductsList({
  background,
  title,
  games,
  id,
  isLoading,
}: Props) {
  const getGameTags = (game: Game) => {
    const tags = [];

    if (game.release_date) {
      tags.push(game.release_date);
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`);
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current));
    }

    return tags;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container id={id} background={background}>
      <div className="wrapper">
        <Title>{title}</Title>
        <List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  infos={getGameTags(game)}
                  system={game.details.system}
                  title={game.name}
                />
              </li>
            ))}
        </List>
      </div>
    </Container>
  );
}
